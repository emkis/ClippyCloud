import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import http from 'http'

import routes from './routes'
import { environment } from './config/environment'
import { UPLOAD_FOLDER_PATH } from './constants'

const app = express()
const server = new http.Server(app)

mongoose.connect(environment.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/file', express.static(UPLOAD_FOLDER_PATH))
app.use(routes)

server.listen(environment.appPort)
