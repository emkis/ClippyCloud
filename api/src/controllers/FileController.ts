import { Request, Response } from 'express'

import User, { IUser } from '../models/User'
import File from '../models/File'

export const FileController = {
  async store (request: Request, response: Response) {
    let user: IUser | null = await User.findById(request.params.id)
    const userNotExists = !user

    if (userNotExists) {
      const userId = request.params.id
      user = await User.create({ _id: userId })
    }

    const file = await File.create({
      path: request!.file!.filename,
      title: request!.file!.originalname,
    })

    user!.files.push(file)
    await user!.save()

    return response.status(200).json(file)
  },
}
