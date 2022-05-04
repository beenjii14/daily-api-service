import express from 'express'

import diaryRouter from 'routes/diaries'

const app = express()

const PORT = 3000

app.use(express.json()) // middleware to parse body of request to json
app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
