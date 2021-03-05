const express = require("express");
const router = express.Router();

//On instancie le controller
const WebhookController = require("../controllers/webhook.controller");
const webhookController = new WebhookController();

// Endpoint du webhook
router.post("/webhook", async (request, response) => {
  const action = request.body.action;

  switch (action) {
    case "sports":
      const sports = await webhookController.getAllSports();
      response.json({ text: sports });
      break;

    case "athletes":
      const athletes = await webhookController.getListeDesAthletes();
      response.json({ text: athletes });
      break;

    case "getByPrenom":
      const athletePrenom = await webhookController.getInfosAthlete(
        request.body.prenom
      );
      response.json({ text: athletePrenom });
      break;

    case "jeuolympique":
      const jo = await webhookController.getAllJeuxOlympiques();
      response.json({ text: jo });
      break;

    case "actualite":
      const news = await webhookController.getDerniereNews();
      response.json({ text: news});
      break;
    default:
      response.json({ text: "Je ne suis pas sûr d'avoir la réponse..." });
  }
});

module.exports = router;
