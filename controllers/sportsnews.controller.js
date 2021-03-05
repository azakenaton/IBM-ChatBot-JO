const sportsNewsService = require("../services/sportsnews.service");

class SportsNewsController {
  constructor() {
    this.sportsNewsService = new sportsNewsService();
  }

  /**
   *
   * @param {req} req la requête
   * @param {res} res le resultat
   * Récupération de news sportives.
   */
  async recupererSportsNews(req, res) {
    const sports = await this.sportsNewsService.recupererSportsNews();
    return sports;
  }
}

module.exports = SportsNewsController;
