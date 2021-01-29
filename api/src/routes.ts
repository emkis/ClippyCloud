import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import { FileController } from './controllers/FileController'
import { UserController } from './controllers/UserController'
import { WakeUpController } from './controllers/WakeUpController'

const routes = express.Router()

routes.get('/wake-up', WakeUpController.index)

routes.get('/user/:id', UserController.show)
routes.get('/users', UserController.index)
routes.post('/user', UserController.store)

routes.post(
  '/user/:id/files',
  multer(multerConfig).single('file'), FileController.store,
)

export default routes
