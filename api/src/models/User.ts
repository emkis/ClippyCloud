import { Schema, model, Document } from 'mongoose'
import { IFile } from './File'

export interface IUser extends Document {
  files: IFile[]
  createdAt: string
  updatedAt: string
}

const UserSchema = new Schema(
  {
    _id: { type: String, required: true },
    files: [
      {
        ref: 'File',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },
)

export default model<IUser>('User', UserSchema)
