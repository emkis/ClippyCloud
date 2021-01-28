import fs from 'fs'
import path from 'path'

import Folder from '../models/Folder'
import File from '../models/File'

export const FolderController = {
  async store(request, response) {
    const { title } = request.body
    const folder = await Folder.create({ title })

    request.io.sockets.emit('@folder/CREATED', folder)

    return response.status(200).json(folder)
  },

  async index(request, response) {
    const folders = await Folder.find()
    response.status(200).json(folders)
  },

  async show(request, response) {
    try {
      const folder = await Folder
        .findById(request.params.id)
        .populate({
          path: 'files',
          options: {
            sort: { createdAt: -1 },
          },
        })

      if (!folder) {
        return response.status(404).json()
      }

      return response.status(200).json(folder)
    } catch {
      return response.status(404).json()
    }
  },

  async delete(request, response) {
    try {
      const folder = await Folder
        .findById(request.params.id)
        .select('files')
        .populate('files', 'path')

      const { files: filesInThisFolder } = folder

      await Promise.all([
        File.deleteMany({ _id: [...filesInThisFolder] }),
        Folder.findOneAndRemove({ _id: request.params.id }),
      ])

      const deleteFile = (file) => {
        const filePath = path.join(__dirname, '..', '..', 'uploads', file.path)
        fs.unlinkSync(filePath)
      }

      filesInThisFolder.forEach(deleteFile)

      request.io.sockets.emit('@folder/REMOVED', folder)

      return response.status(200).json(folder)
    } catch (error) {
      return response.status(404).json()
    }
  },
}
