import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as routes from './routes'
import { nextApp } from './nextApp'
// require('module-alias/register')

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes.api)
app.use('/', routes.app)
;(async () => {
  try {
    await nextApp.prepare()
    app.listen(port)
    console.log(`> Ready on http://localhost:${port}`)
  } catch (err) {
    console.error(err.message)
  }
})()
