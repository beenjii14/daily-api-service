import express from 'express' // ESmodules
// TODO: const express = require('express') // CommonJS

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Fetching all entry diaries').status(200)
})

router.post('/', (_req, res) => {
  res.send('Creating a new entry diary').status(200)
})

export default router
