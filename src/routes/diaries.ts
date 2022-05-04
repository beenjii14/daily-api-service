import express from 'express' // ESmodules
// TODO: const express = require('express') // CommonJS

import * as diaryServices from 'services/diaryService'
import { toNewDiaryEntry } from 'utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithOutSensitiveInfo()).status(200)
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  res.send(diary).status(200)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.send(addedDiaryEntry).status(201)
  } catch (error) {
    res.send(error).status(400)
  }
})

export default router
