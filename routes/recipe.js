const express = require('express')

const recipeRoutes = express.Router()

const Recipe = require('../models/recipe')

// LISTA "Recipe"
recipeRoutes.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipe.findAll()

        res.status(200).send(recipes)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

// CREAZIONE di una nuova "Recipe"
recipeRoutes.post('/', async (req, res, next) => {
    try {
        let newRecipe = new Recipe()

        if (req.body.hasOwnProperty('name')) {
            newRecipe.name = req.body.name
        }

        if (req.body.hasOwnProperty('ingredients')) {
            newRecipe.ingredients = req.body.ingredients
        }

        await newRecipe.save()
        res.status(200).send(newRecipe)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

// MODIFICA di una recipe
recipeRoutes.put('/:id', async (req, res, next) => {
    try {
        let recipe = await Recipe.findOne({where: {id: req.params.id}})

        if (recipe) {
            if (req.body.hasOwnProperty('name')) {
                recipe.name = req.body.name
            }

            if (req.body.hasOwnProperty('ingredients')) {
                recipe.ingredients = req.body.ingredients
            }

            await recipe.save()
            res.status(200).send(recipe)
        } else {
            res.status(404).send('Not found')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = recipeRoutes