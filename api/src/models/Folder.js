import mongoose from 'mongoose'

const Folder = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    files: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File',
      },
    ],
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Folder', Folder)
