const uuid = require('uuid')
const path = require('path')
const {Stand_up, Description} = require('../models/models')
const ApiError = require('../errors/ApiError')
const {DataTypes} = require("sequelize");

class StandUpController {
    async create(req, res, next) {
        try {
            let {name, cost, address, date, time} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const standUp = await Stand_up.create({name, cost, address, date, time, img: fileName})
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
        let stand_up = await Stand_up.findAndCountAll({limit, offset});
        return res.json(stand_up)
    }
    async getOne(req, res) {
        const {id} = req.params
        const stand_up = await Stand_up.findOne({
            where: {id}
        })
        return res.json(stand_up)
    }
}

module.exports = new StandUpController()