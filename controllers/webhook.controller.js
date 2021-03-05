const sportsService = require("../services/sports.service");
const AthletesService = require("../services/athletes.service");
const WebhookService = require("../services/webhook.service");
const JeuOlympiqueService = require("../services/jeuolympique.service");
const SportsNewsService = require("../services/sportsnews.service");

class WebhookController {
  constructor() {
    this.sportsService = new sportsService();
    this.athletesService = new AthletesService();
    this.webhookService = new WebhookService();
    this.jeuOlympiqueService = new JeuOlympiqueService();
    this.sportsnewsService = new SportsNewsService();
  }

  /**
   *
   * @param {req} req la requête
   * @param {res} res le resultat
   * Récupération de tout les sports et format pour watson.
   */
  async getAllSports(req, res) {
    const sports = await this.sportsService.getAllSports();
    return this.webhookService.formatWatsonAssistantFormat(sports);
  }

  /**
   * Récupération d'une liste des athlètes.
   * @param {req} req la requête.
   * @param {res} res la résultat.
   */
  async getListeDesAthletes(req, res) {
    const athletes = await this.athletesService.getListeDesAthletes();
    return this.webhookService.formatWatsonAssistantFormatListeAthlete(athletes);
  }

  /**
   * Voir les informations pour un athlète
   */
  async getInfosAthlete(prenom) {
    const athlete = await this.athletesService.chargerAthleteByNomPrenom(prenom);
    return this.webhookService.formatWatsonAssistantFormatAthlete(athlete);
  }

  /**
   * Voir les informations pour une liste de JO.
   */
  async getAllJeuxOlympiques() {
    const jo = await this.jeuOlympiqueService.getAllJeuOlympique();
    return this.webhookService.formatWatsonAssistantFormatJO(jo);
  }

  /**
   * Voir la dernière news sportives.
   */
  async getDerniereNews() {
    const news = await this.sportsnewsService.recupererSportsNews();
    return this.webhookService.formatWatsonAssistantFormatDerniereNews(news[0]);
  }
}

module.exports = WebhookController;
