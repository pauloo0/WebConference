interface Global {
  [key: string]: any
}

declare const global: Global

import { NextFunction, Request, Response } from 'express'

import app from './server'
import router from './routes/main.route'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
import bodyParser from 'body-parser'
import { check, validationResult } from 'express-validator'
import models from './models'

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.set('trust proxy', 1)
app.use(
  session({
    secret: 'webbookfca',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60000, httpOnly: true },
  })
)

app.use(function (req: Request, res: Response, next: NextFunction) {
  if (global.sessData === undefined) {
    global.sessData = req.session
    global.sessData.ID = req.sessionID
  } else {
    console.log('session exists', global.sessData.ID)
  }
  next()
})

app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions

require('./routes/auth.route.ts')(app, passport)
require('./config/passport.ts')(passport, models.user)

try {
  models.sequelize.sync()
  console.log('Nice! Database looks fine')
} catch (error) {
  console.log(error, 'Something went wrong the the Database update!')
}

app.use('/', router)
export default app
