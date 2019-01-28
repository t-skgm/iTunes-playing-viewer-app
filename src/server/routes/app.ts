import * as express from 'express'
import { nextApp } from '../nextApp'

const router = express.Router()
const handler = nextApp.getRequestHandler()

router.get('/about', (req, res) => {
  return nextApp.render(req, res, '/about', req.query)
})

router.get('*', (req, res) => {
  return handler(req, res)
})

export default router
