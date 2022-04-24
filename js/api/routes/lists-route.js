import express from 'express'
import * as listController from '../controllers/list-controller.js'
import * as authenticate from '../middleware/authenticate.js'

const router = express.Router()
// router.get('/', authenticate, listController.index)
router.get('/', listController.index)
router.post('/show', listController.show)
router.post('/add', listController.add)
router.put('/update', listController.update)
router.post('/delete', listController.deleteList)

export { router }