const express = require("express")
const router = express.Router()
// router es un objeto para controlar rutas

const Movie = require("../models/Movie.model.js")

router.get('/', (req, res) => {
  res.render("home.hbs")
})

router.get('/about', (req, res) => {
  res.render("about.hbs")
  console.log(process.env.PALABRA_SUPER_SECRETA)
})

router.get('/my-hobbies', (req, res, next) => {
  Movie.find()
  .then((response) => {
    console.log(responsed)
    res.render("my-hobbies.hbs", {
      allMovies: response
    })
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router