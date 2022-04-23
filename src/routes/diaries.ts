import express from 'express'

const Router = express.Router()

Router.get('/ping', (_req, res) => {
  res.send('ponggg').status(200)
})

export default Router
