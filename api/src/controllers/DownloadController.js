import path from 'path'
import archiver from 'archiver'
import File from '../models/File'

export const DownloadController = {
  async index(request, response) {
    const uploadsFolderPath = path.resolve(__dirname, '..', '..', 'uploads')
    const outputFile = 'all_files.zip'

    const files = await File.find()
    const zip = archiver('zip')

    response.attachment(outputFile)
    zip.pipe(response)

    files.forEach((file) => {
      const filePath = path.join(uploadsFolderPath, file.path)
      zip.file(filePath, { name: file.title })
    })

    zip.finalize()
    return archiver
  },
}
