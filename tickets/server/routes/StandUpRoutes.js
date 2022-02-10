const Router = require('express')
const router = new Router()
const StandUpController = require('../controllers/StandUpController')

router.post('/', StandUpController.create)
router.get('/', StandUpController.get)
router.get('/:id', StandUpController.getOne)

module.exports = router