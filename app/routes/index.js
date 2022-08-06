const express = require('express')
const cors = require('cors')
const helthRoutes = require('../routes/health.routes')
const authRoutes = require('../routes/auth.routes')
const profileRoutes = require('../routes/profile.routes')

const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Import Routes
router.use('/', helthRoutes)
router.use('/uber', authRoutes)
router.use('/uber', profileRoutes)

// Define Root path
app.use('/', router)

module.exports = app