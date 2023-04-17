import express from 'express'
import sequelize from './config/connectMySQL'
import cors from 'cors'

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

const app = express()

app.use('/assets', express.static('assets'))
app.use('/views', express.static('views'))

app.use(cors())
app.use(cors({ exposedHeaders: ['Location'] }))
const permitedLinker = ['localhost', '127.0.0.1']

app.listen(port, async () => {
  try {
    await sequelize.authenticate()
    console.log(
      `Connection has been established successfully. Server listening on port ${port}`
    )
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})

export default app
require('./loader.ts')
