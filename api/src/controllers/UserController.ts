import { Request, Response } from 'express'
import User from '../models/User'

export const UserController = {
  async index (_request: Request, response: Response) {
    const users = await User.find()
    response.status(200).json(users)
  },

  async store (request: Request, response: Response) {
    const { _id } = request.body
    const userAlreadyExists = !!await User.findById(_id)

    if (userAlreadyExists) {
      return response.status(400).json({ message: 'User already exists' })
    }

    const user = await User.create({ _id })

    return response.status(200).json(user)
  },

  async show (request: Request, response: Response) {
    const user = await User
      .findById(request.params.id)
      .populate({
        path: 'files',
        options: {
          sort: { createdAt: -1 },
        },
      })

    if (!user) {
      return response.status(404).send()
    }

    return response.status(200).json(user)
  },
}
