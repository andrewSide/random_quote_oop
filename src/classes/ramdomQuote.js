import { quotes, jokes } from "../data/quotes.js";
import MathUtils from "../utils/mathUtils.js";
import Quote from "./quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(jokes.length);
    const { id, text, author } = jokes[randomIndex];
    return new Quote(id, text, author);
  }
  static getRandomQuoteViaAPI() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    const options = { headers: { "Content-Type": "application/json" } };
    return fetch(url, options)
      .then((response) => response.json())
      .then(({ id, quote: text, author }) => new Quote(id, text, author))
      .catch((error) => console.error(error));
  }
}

export default RandomQuote;
