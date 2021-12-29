const Quote = require("../models/quotes.model");

module.exports.helloWorld = (req, res) => {
    res.json({ message: "Hello World" });
}

module.exports.findAllQuotes = (req, res)=> {
    //looks to find all Quotes
    Quote.find()
        .then(allQuotes=>{
            res.json({results: allQuotes})
        })
        .catch(err=>{
            res.json({err: err})
        })
}

module.exports.createNewQuote = (req, res)=> {
    Quote.create(req.body)
        .then(newQuoteobj=>{
            res.json({results: newQuoteobj})
        })
        .catch(err=>{
            res.json({err: err})
        })
}