const Sport = require("../models/sport");
const Athlete = require("../models/athlete");
const athlete = require("../models/athlete");
const https = require("https");
const Parser = require("rss-parser");
const SportsNews = require("../dtos/sportsnews");

class SportsNewsService {
  constructor() {
    this.parser = new Parser();
  }

  /**
   * Permet de récupérer une liste d'actualité sportives.
   */
  async recupererSportsNews() {
    let news = [];
    const feed = await this.parser.parseURL(
      "https://www.lemonde.fr/sport/rss_full.xml"
    );
    for (const article of feed.items) {
      const newssport = new SportsNews(article.title, article.contentSnippet);
      news.push(newssport);
    }
    return news;
  }
}

module.exports = SportsNewsService;
