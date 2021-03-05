const JeuOlympique = require("../models/jeuolympique");

class JeuOlympiqueService {
  constructor() {}

  /**
   * Permet la récupération de tous les jeux olympiques.
   */
  async getAllJeuOlympique() {
    const jo = await JeuOlympique.find({});
    return jo;
  }
}

module.exports = JeuOlympiqueService;
