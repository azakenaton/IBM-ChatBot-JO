const Sport = require("../models/sport");
const Athlete = require("../models/athlete");
const athlete = require("../models/athlete");

class WebhookService {
  constructor() {}

  /**
   * Permet le formattage d'une liste de sport.
   */
  formatWatsonAssistantFormat(liste) {
    let formatText = "";
    for (const sport of liste) {
      formatText += sport.name + "\n";
    }
    return formatText;
  }

  /**
   * Permet le formattage de la liste des athletes
   */
  formatWatsonAssistantFormatListeAthlete(liste) {
    let formatText = "";
    for (const athlete of liste) {
      formatText += "Nom : " + athlete.lastName + " Prenom : " + athlete.firstName + "\n";
      formatText += "----------" + "\n";
    }
    return formatText;
  }
  
  /**
   * Permet le formattage des infos athlete
   */
  formatWatsonAssistantFormatAthlete(liste) {
    let formatText = "";
    for (const athlete of liste) {
      formatText += "Nom : " + athlete.lastName + "\n" 
        + " Prenom : " + athlete.firstName + "\n"
        + " Genre : " + athlete.gender + "\n"
        + " Pays : " + athlete.country + "\n";
      formatText += "----------" + "\n";
    }
    return formatText;
  }

  /**
   * Permet le formattage d'une liste de jo.
   */
  formatWatsonAssistantFormatJO(liste) {
    let formatText = "";
    for (const jo of liste) {
      formatText += jo.annee + " : " + jo.name + "\n";
    }
    return formatText;
  }

  /**
   * Permet le format d'une news pour le Watson Assistant.
   */
  formatWatsonAssistantFormatDerniereNews(news) {
    return news.titre + "\n" + news.contenu;
  }
}

module.exports = WebhookService;
