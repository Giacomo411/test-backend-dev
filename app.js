const express = require('express')

const { Sequelize } = require('sequelize')

const http = require('http')

require('dotenv').config()

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

// Connessione al database con sequelize
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
})

// Includo gli endpoint per "Recipe"
recipeRoutes = require('./routes/recipe')
app.use('/api/recipe', recipeRoutes)

const server = http.createServer(app)

server.listen(3000, () => {
    // Verifico la connessione al database con sequelize
    sequelize.authenticate()
    .then(() => {
        console.log('Server running successfully: http://localhost:3000')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })
})