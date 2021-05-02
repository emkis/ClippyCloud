import { Schema, model, Document } from 'mongoose'
import { environment } from '../config/environment'

export interface IFile extends Document {
  title: string
  path: string
  createdAt: string
  updatedAt: string
}

const FileSchema = new Schema(
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

function FileURLGetter (this: IFile) {
  const { appUrl } = environment
  return `${appUrl}/file/${encodeURIComponent(this.path)}`
}

FileSchema.virtual('url').get(FileURLGetter)

export default model<IFile>('File', FileSchema)
