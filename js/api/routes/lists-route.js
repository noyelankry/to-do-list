const express = require('express')
const router = express.Router()

const listController = require('../controllers/list-controller')
const authenticate = require('../middleware/authenticate')

// router.get('/', authenticate, listController.index)
router.get('/', listController.index)
router.post('/show', listController.show)
router.post('/add', listController.add)
router.put('/update', listController.update)
router.post('/delete', listController.deleteList)

module.exports = router