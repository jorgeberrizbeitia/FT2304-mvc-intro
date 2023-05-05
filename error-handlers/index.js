function errorHandling(app) {
  // 404
  app.use((req, res) => {
    // cualquier llamada que no haya sido captada por las rutas
    // res.render("not-found.hbs")
    res.status(404).render("not-found.hbs");
  });

  // 500
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).render("error.hbs");
  });
}


module.exports = errorHandling

