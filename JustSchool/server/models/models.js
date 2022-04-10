const sequilize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequilize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    courses_past: {type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: []},
    courses_current: {type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: []},
    photo: {type: DataTypes.STRING, defaultValue: "avatar.jpg"}
})

const Basket = sequilize.define( 'basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketCourses = sequilize.define( 'basket_courses', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Course = sequilize.define( 'course', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    cost: {type: DataTypes.INTEGER, allowNull: false},
    date: {type: DataTypes.STRING, allowNull: false},
    knowledge: {type: DataTypes.STRING, allowNull: false},
    time_hours: {type: DataTypes.STRING, allowNull: false},
    time_days: {type: DataTypes.STRING, allowNull: false},
    duration: {type: DataTypes.STRING, allowNull: false},
    students: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING(2048), allowNull: false},
    instructor: {type: DataTypes.STRING(2048), allowNull: false},
    instructor_photo: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketCourses)
BasketCourses.belongsTo(Basket)

Course.hasMany(BasketCourses)
BasketCourses.belongsTo(Course)

module.exports = {
    User,
    Basket,
    BasketCourses,
    Course
}