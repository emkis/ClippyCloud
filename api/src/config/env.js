import 'dotenv/config'

function makeEnv() {
  const appPort = process.env.PORT || 3333
  const appUrl = process.env.APP_URL || `http://localhost:${appPort}`
  const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/dropbox'

  return {
    appPort,
    appUrl,
    mongoUrl,
  }
}

export default makeEnv()
