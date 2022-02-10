const sequilize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequilize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequilize.define( 'basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketStandUp = sequilize.define( 'basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Rating = sequilize.define( 'rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const Stand_up = sequilize.define( 'stand_up', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    cost: {type: DataTypes.INTEGER, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketStandUp)
BasketStandUp.belongsTo(Basket)

Stand_up.hasMany(BasketStandUp)
BasketStandUp.belongsTo(Stand_up)

Stand_up.hasMany(Rating)
Rating.belongsTo(Stand_up)

module.exports = {
    User,
    Basket,
    BasketStandUp,
    Rating,
    Stand_up
}