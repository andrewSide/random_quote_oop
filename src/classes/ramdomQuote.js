import { quotes, jokes } from "../data/quotes.js";
import MathUtils from "../utils/mathUtils.js";
import Quote from "./quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(jokes.length);
    const { id, text, author } = jokes[randomIndex];
    return new Quote(id, text, author);
  }
}

export default RandomQuote;
