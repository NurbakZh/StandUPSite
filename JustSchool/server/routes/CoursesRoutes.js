const Router = require('express')
const router = new Router()
const CourseController = require('../controllers/CourseController')

router.post('/', CourseController.create)
router.get('/', CourseController.get)
router.get('/:id', CourseController.getOne)

module.exports = router