import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import cors from 'cors'
import http from 'http'
import socketIO from 'socket.io'

import routes from './routes'
import env from './config/env'
import { isDevelopment } from './utilities/environment'

const app = express()
const server = http.Server(app)

const corsConfiguration = isDevelopment() ? '*' : env.appUrl
const io = socketIO(server, { cors: corsConfiguration })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

io.on('connection', (socket) => {
  socket.on('connectionRoom', (folder) => socket.join(folder))
})

mongoose.connect(env.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.use((request, _, next) => {
  request.io = io
  return next()
})

const uploadFolderPath = path.resolve(__dirname, '..', 'uploads')
app.use('/files', express.static(uploadFolderPath))

app.use(routes)

server.listen(env.appPort)
