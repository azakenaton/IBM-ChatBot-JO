const express = require("express");
const router = express.Router();

//On instancie le controller
const SportsNewsController = require("../controllers/sportsnews.controller");
const sportsNewsController = new SportsNewsController();

// Endpoint du webhook
router.get("/", async (request, response) => {
  const news = await sportsNewsController.recupererSportsNews(request, response);
  response.render("home", { news: news});
});

module.exports = router;
