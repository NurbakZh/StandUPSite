const uuid = require('uuid')
const path = require('path')
const {Course} = require('../models/models')
const ApiError = require('../errors/ApiError')
const {DataTypes} = require("sequelize");

class CourseController {
    async create(req, res, next) {
        try {
            let {name, cost, date, knowledge, time_hours,time_days,
                duration,students,description,instructor} = req.body
            const {instructor_photo, img} = req.files
            let fileName = uuid.v4() + ".png"
            let fileName1 = uuid.v4() + "1.png"
            instructor_photo.mv(path.resolve(__dirname, '..', 'static', fileName1))
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const standUp = await Course.create({name, cost, date, knowledge,
                time_hours, time_days, duration, students, description,
                instructor, instructor_photo:fileName1, img: fileName})
            return res.json(standUp)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async get(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let stand_up = await Course.findAndCountAll({limit, offset});
        return res.json(stand_up)
    }
    async getOne(req, res) {
        const {id} = req.params
        const stand_up = await Course.findOne({
            where: {id}
        })
        return res.json(stand_up)
    }
}

module.exports = new CourseController()