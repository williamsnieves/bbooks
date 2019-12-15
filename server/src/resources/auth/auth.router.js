import { Router } from 'express'
import controllers from './auth.controller'

const router = Router()

// /api/list
router.route('/').post(controllers.authorization)

export default router
