import multer from 'multer'

import { UPLOAD_FOLDER_PATH } from '../constants'
import { generateUniqueId } from '../utilities/strings'

export default {
  dest: UPLOAD_FOLDER_PATH,

  storage: multer.diskStorage({
    destination: (_, __, cb) => {
      cb(null, UPLOAD_FOLDER_PATH)
    },

    filename: (_, file: Express.Multer.File, appendFileName) => {
      const fileId = generateUniqueId()
      const fileName = file.originalname
      const customName = `${fileId}--${fileName}`

      appendFileName(null, customName)
    },
  }),
}
