import express, { Application } from 'express'
import config from './config/default'
import textRoyr from './routes/test'

const app: Application = express()

app.use('/test', textRoyr)

app.use('*', (_, res) => {
  res.send(`Welcome${  config.uri}`)
})

app.listen(8000, () => console.log('Serever running on port 8000'))
