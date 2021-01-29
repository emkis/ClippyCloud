import User from '../models/User'

export const UserController = {
  async store(request, response) {
    const { _id } = request.body
    const userAlreadyExists = !!await User.findById(_id)

    if (userAlreadyExists) {
      return response.status(400).json({ message: 'User already exists' })
    }

    const user = await User.create({ _id })

    request.io.sockets.emit('@user/CREATED', user)

    return response.status(200).json(user)
  },

  async index(_, response) {
    const users = await User.find()
    response.status(200).json(users)
  },

  async show(request, response) {
    try {
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
    } catch {
      return response.status(404).send()
    }
  },
}
