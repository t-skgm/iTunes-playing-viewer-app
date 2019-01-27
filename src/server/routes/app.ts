import * as express from 'express';
import { nextApp } from '../nextApp';

const router = express.Router();
const handler = nextApp.getRequestHandler()

router.get('/a', (req, res) => {
  return nextApp.render(req, res, '/b', req.query)
})

router.get('/b', (req, res) => {
  return nextApp.render(req, res, '/a', req.query)
})

router.get('*', (req, res) => {
  return handler(req, res)
})

export default router
