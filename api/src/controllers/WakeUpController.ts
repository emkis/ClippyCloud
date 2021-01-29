import { Request, Response } from 'express'

export const WakeUpController = {
  index (_: Request, response: Response) {
    return response.status(204).send()
  },
}
