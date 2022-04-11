const { Sequelize, DataTypes, Model } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
})

class Recipe extends Model {}

Recipe.init({
    // Definizione attributi
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
            // Ulteriore controllo per includere solo array non vuoti con elementi stringa
            isValidArray(value) {
                if (!Array.isArray(value) || value.length === 0 || !value.every(element => typeof element === 'string')) {
                    throw new Error('Only not empty array with string type elements are allowed')
                }
            }
        }
    },
    image: {
        type: DataTypes.BLOB('long')
    }
}, {
    // Altre opzioni
    sequelize,
    modelName: 'Recipe'
})

// Creazione tabella se non esiste
Recipe.sync()

module.exports = Recipe