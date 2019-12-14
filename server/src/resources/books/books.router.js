import { Router } from 'express'
import controllers from './books.controller'

const router = Router()

// /api/list
router.route('/').get(controllers.getBooks)
router.route('/:term').get(controllers.getBooks)

export default router
