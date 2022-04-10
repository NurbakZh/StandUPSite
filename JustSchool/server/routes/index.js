const Router = require('express')
const router = new Router()
const userRouter = require('./UserRoutes')
const courseRouter = require('./CoursesRoutes')

router.use('/user', userRouter)
router.use('/courses',courseRouter)

module.exports = router