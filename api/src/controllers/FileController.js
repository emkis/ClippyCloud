import User from '../models/User'
import File from '../models/File'

export const FileController = {
  async store(request, response) {
    const user = await User
      .findById(request.params.id)
      .select('files')
      .populate('files', 'title path')

    const file = await File.create({
      path: request.file.key,
      title: request.file.originalname,
    })

    user.files.push(file)
    await user.save()

    request.io.sockets.in(user.id).emit('@file/CREATED', file)

    return response.status(200).json(file)
  },

  async show(request, response) {
    try {
      const { id } = request.params
      const file = await File.findById(id)

      if (!file) {
        return response.status(404).json()
      }

      return response.status(200).json(file)
    } catch {
      return response.status(404).json()
    }
  },
}
