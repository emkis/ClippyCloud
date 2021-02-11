import { Request, Response } from 'express'

export const WakeUpController = {
  index (_request: Request, response: Response) {
    return response.status(204).send()
  },
}
