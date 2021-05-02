import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import { FileController } from './controllers/FileController'
import { WakeUpController } from './controllers/WakeUpController'

const routes = express.Router()
const multerMiddleware = multer(multerConfig).single('file')

routes.get('/wake-up', WakeUpController.index)
routes.post('/user/:id/files', multerMiddleware, FileController.store)

export default routes
