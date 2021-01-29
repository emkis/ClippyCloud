import { Schema, model } from 'mongoose'
import env from '../config/env'

const File = new Schema(
  {
    title: { type: String, required: true },
    path: { type: String, required: true },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
)

function FileURLGetter() {
  const url = env.appUrl
  return `${url}/files/${encodeURIComponent(this.path)}`
}

File.virtual('url').get(FileURLGetter)

export default model('File', File)
