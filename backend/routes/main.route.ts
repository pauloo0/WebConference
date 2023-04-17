import express from 'express'
const router = express.Router()

import login from '../assets/jsonMessages/login'

import controllerSpeaker from '../controllers/speaker.controller.ts'
import controllerSponsor from '../controllers/sponsor.controller.ts'
import controllerConference from '../controllers/conference.controller.ts'
import controllerParticipant from '../controllers/participant.controller.ts'
import controllerMail from '../controllers/mail.controller.ts'

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('FCA Book')
  res.end()
})

router.get('/speakers', controllerSpeaker.read)
router.get('/speakers/:id', controllerSpeaker.readID)
router.post('/speakers', isLoggedIn, controllerSpeaker.save)
router.put('/speakers/:id', isLoggedIn, controllerSpeaker.update)
router.put('/speakers/del/:id', isLoggedIn, controllerSpeaker.deleteL)
router.delete('/speakers/:id', isLoggedIn, controllerSpeaker.deleteF)

router.get('/sponsors', controllerSponsor.read)
router.get('/sponsors/:id', controllerSponsor.readID)
router.post('/sponsors', isLoggedIn, controllerSponsor.save)
router.put('/sponsors/:id', isLoggedIn, controllerSponsor.update)
router.put('/sponsors/del/:id', isLoggedIn, controllerSponsor.deleteL)
router.delete('/sponsors/:id', isLoggedIn, controllerSponsor.deleteF)

router.get('/conferences', controllerConference.read)
router.get('/conferences/:id', controllerConference.readID)

router.get(
  'conferences/:idconf/participants',
  controllerParticipant.readParticipant
)
router.post(
  'conferences/:idconf/participants/:idparticipant',
  isLoggedIn,
  controllerParticipant.saveParticipant
)
router.delete(
  'conferences/:idconf/participants/:idparticipant',
  isLoggedIn,
  controllerParticipant.deleteParticipant
)

router.get('conferences/:idconf/sponsors', controllerSponsor.readSponsor)
router.post(
  'conferences/:idconf/sponsors/:idsponsor',
  isLoggedIn,
  controllerSponsor.saveSponsor
)
router.delete(
  'conferences/:idconf/sponsors/:idsponsor',
  isLoggedIn,
  controllerSponsor.deleteSponsor
)

router.get('conferences/:idconf/speakers', controllerSpeaker.readSpeaker)
router.post(
  'conferences/:idconf/speakers/:idspeaker',
  isLoggedIn,
  controllerSpeaker.saveSpeaker
)
router.delete(
  'conferences/:idconf/speakers/:idspeaker',
  isLoggedIn,
  controllerSpeaker.deleteSpeaker
)

router.post('/contact', controllerMail.send)

export default router

function isLoggedIn(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.status(login.user.unauthorized.status).send(login.user.unauthorized)
    return next()
  }
}
