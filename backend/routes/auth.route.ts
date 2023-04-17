import authController from '../controllers/auth.controller.ts'
import express from 'express'
import passport from 'passport'

export default (app: express.Express, passport: passport.PassportStatic) => {
  app.get('/signup', authController.signup)
  app.get('/signin', authController.signin)

  app.get('/singupSuccess', authController.signupSuccess)
  app.get('/signinSuccess', isLoggedIn, authController.signinSuccess)

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/signupSuccess',
      failureRedirect: '/signup',
    })
  )
  app.get('/logout', authController.logout)
  app.post(
    '/signin',
    passport.authenticate('local-signin', {
      successRedirect: '/signinSuccess',
      failureRedirect: '/signin',
    })
  )
}

function isLoggedIn(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.isAuthenticated()) return next()
  res.redirect('/signin')
}
