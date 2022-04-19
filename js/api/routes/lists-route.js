const express = require('express')
const router = express.Router()

const listController = require('../controllers/list-controller')

router.get('/', listController.index)
router.post('/show', listController.show)
router.post('/add', listController.add)
router.put('/update', listController.update)
router.post('/delete', listController.deleteList)

module.exports = router