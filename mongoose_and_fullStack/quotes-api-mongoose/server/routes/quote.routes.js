const QuoteController = require("../controllers/quote.controller");

module.exports = app => {
    app.get("/api", QuoteController.helloWorld)
    app.get("/api/quotes", QuoteController.findAllQuotes)
    app.post("/api/quotes", QuoteController.createNewQuote)
}