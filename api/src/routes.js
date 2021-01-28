import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import { FileController } from './controllers/FileController'
import { FolderController } from './controllers/FolderController'

const routes = express.Router()

routes.get('/folder/:id', FolderController.show)
routes.get('/folders', FolderController.index)
routes.get('/file/:id', FileController.show)
routes.post('/folder', FolderController.store)
routes.delete('/folder/:id', FolderController.delete)

routes.post(
  '/folder/:id/files',
  multer(multerConfig).single('file'), FileController.store,
)

export default routes
