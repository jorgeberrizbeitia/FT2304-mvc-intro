// Gets access to environment variables/settings
require('dotenv').config()


// Connects to the database... if we had one :( 
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/my-first-db")
.then(() => {
  console.log("conectados a la base de datos")
})
.catch((err) => {
  console.log(err)
})




// Handles http requests (express is node js framework)
const express = require('express');
const app = express();


// Handles the handlebars
const hbs = require("hbs");


// This part runs most pieces of middleware
app.use(express.static("public"))
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/' )

// const nuevaApi = new PatataApi(process.env.API_KEY)


// Local Variables 
// TODO           

const Movie = require("./models/Movie.model.js")

// 👇 Start handling routes here
app.get('/', (req, res) => {
  res.render("home.hbs")
})

app.get('/about', (req, res) => {
  res.render("about.hbs")
  console.log(process.env.PALABRA_SUPER_SECRETA)
})

app.get('/my-hobbies', (req, res) => {
  Movie.find()
  .then((response) => {
    console.log(response)
    res.render("my-hobbies.hbs", {
      allMovies: response
    })
  })
  .catch((err) => {
    console.log(err)
  })
})


// To handle errors.
// TODO            


// Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});