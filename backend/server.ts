import express from 'express'
import sequelize from './config/connectMySQL'
import bodyParser from 'body-parser'

const app = express()

//use body-parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// get the port from the environment variable or use 3000
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

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
