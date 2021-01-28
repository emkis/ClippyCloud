import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const pathName = path.resolve(__dirname, '..', '..', 'uploads')

export default {
  dest: pathName,

  storage: multer.diskStorage({
    destination: (_, __, cb) => {
      cb(null, pathName)
    },

    filename: (_, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        file.key = `${hash.toString('hex')}-${file.originalname}`

        cb(null, file.key)
      })
    },
  }),
}
