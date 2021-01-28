import mongoose from 'mongoose'
import env from '../config/env'

const File = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  },
)

File.virtual('url').get(function () {
  const url = env.appUrl
  return `${url}/files/${encodeURIComponent(this.path)}`
})

export default mongoose.model('File', File)
