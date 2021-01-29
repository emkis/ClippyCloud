import User from '../models/User'
import File from '../models/File'

export const FileController = {
  async store(request, response) {
    let user = await User.findById(request.params.id)
    const userNotExists = !user

    if (userNotExists) {
      const userId = request.params.id
      user = await User.create({ _id: userId })
    }

    const file = await File.create({
      path: request.file.key,
      title: request.file.originalname,
    })

    user.files.push(file)
    await user.save()

    return response.status(200).json(file)
  },
}
