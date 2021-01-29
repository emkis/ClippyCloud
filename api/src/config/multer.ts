import multer from 'multer'
import crypto from 'crypto'

import { UPLOAD_FOLDER_PATH } from '../constants'

export default {
  dest: UPLOAD_FOLDER_PATH,

  storage: multer.diskStorage({
    destination: (_, __, cb) => {
      cb(null, UPLOAD_FOLDER_PATH)
    },

    filename: (_, file: Express.Multer.File, cb) => {
      crypto.randomBytes(16, (_, hash) => {
        const customName = `${hash.toString('hex')}-${file.originalname}`
        cb(null, customName)
      })
    },
  }),
}
