import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
