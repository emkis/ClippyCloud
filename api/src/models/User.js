import { Schema, model } from 'mongoose'

const User = new Schema(
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

export default model('User', User)
