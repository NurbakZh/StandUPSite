const Router = require('express')
const router = new Router()
const userRouter = require('./UserRoutes')
const standUpRouter = require('./StandUpRoutes')

router.use('/user', userRouter)
router.use('/stand_up',standUpRouter)

module.exports = router