import express from 'express'

const app = express()

const PORT = 3000

app.use(express.json()) // middleware to parse body of request to json

app.use('/ping', (_req, res) => {
  res.send('pong').status(200)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
