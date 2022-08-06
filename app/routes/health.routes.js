const express = require('express')
const router = express.Router()

router.get('', (req, res, next) => {
    return res.send('Hello Palenca');
})

module.exports = router