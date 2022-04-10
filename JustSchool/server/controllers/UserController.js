const ApiError = require('../errors/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
const jwt = require('jsonwebtoken')
const {json} = require("express");

class UserController {
    async registration(req, res, next) {
        try {
            const {email, name, password, role} = req.body
            if(!email || !password || !name) {
                return next(ApiError.badRequest("please fill both email and password"))
            }
            const candidate = await User.findOne({where: {email}})
            if(candidate) {
                return next(ApiError.badRequest("user with such email already exists"))
            }
            const user = await User.create({email, name, password, role})
            const basket = await Basket.create({user_id: user.id})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        return res.json("ok")
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.internalError("no such user with this id"))
        }
        if(password!=user.password) {
            return next(ApiError.internalError(`password for user with email: ${email} is incorrect`))
        }
        return res.json("ok")
    }
    //we weanted ot generateJWT token to handle user logging in more convinient way, but gave up this idea
    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()