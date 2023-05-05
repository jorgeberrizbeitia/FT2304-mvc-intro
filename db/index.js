const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/my-first-db")
.then(() => {
  console.log("conectados a la base de datos")
})
.catch((err) => {
  console.log(err)
})