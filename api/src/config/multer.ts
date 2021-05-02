import multer, { Options } from 'multer'

import { UPLOAD_FOLDER_PATH, FILE_MAX_SIZE } from '../constants'
import { generateUniqueId } from '../utilities/strings'

const multerConfigs: Options = {
  dest: UPLOAD_FOLDER_PATH,

  limits: {
    fileSize: FILE_MAX_SIZE,
  },

  storage: multer.diskStorage({
    destination: (_, __, createFileInFolder) => {
      createFileInFolder(null, UPLOAD_FOLDER_PATH)
    },

    filename: (_, file: Express.Multer.File, appendFileName) => {
      const fileId = generateUniqueId()
      const fileName = file.originalname
      const customName = `${fileId}--${fileName}`

      appendFileName(null, customName)
    },
  }),
}

export default multerConfigs
