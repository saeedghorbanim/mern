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

module.exports.findOneQuote = (req, res) => {
    Quote.findOne({_id:req.params.id})
        .then(foundQuote=>{
            res.json({results: foundQuote})
        })
        .catch(err=>{
            res.json({err: err})
        })
}

module.exports.updateExistingQuote = (req, res) => {
    Quote.findOneAndUpdate(
        //req.params is trying to get data from the route (for example the id in the route)
        //idSpecific is what req.params is trying to get from the url
        { _id: req.params.idSpecific }, //find the object whose _id == req.params.idSpecific
        req.body, //is the information from the form (in this case we used postman, we use form later for fullstack) to update with
        //new: true means return the updated info, runValidators means if we wrote any validation for this part, check it
        { new: true, runValidators: true }
    )
        .then(updatedQuote => {
            res.json({results: updatedQuote })
        })
        .catch(err=>{
            res.json({err: err})
        })
}


module.exports.deleteQuote = (req, res) => {
    Quote.deleteOne({_id:req.params.id})
        .then(deletedQuote=>{
            res.json({results: deletedQuote})
        })
        .catch(err=>{
            res.json({err: err})
        })
}

module.exports.findRandomQuote = (req, res) => {
    Quote.find()
        .then(allQuotes=>{
            let lengthOfAllQuotes = allQuotes.length;

            //get a random number from 0 to lengthOfAllQuotes
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let randomIndex = getRandomInt(lengthOfAllQuotes)

            res.json({results: allQuotes[randomIndex]})
        })
        .catch(err=>{
            res.json({err: err})
        })
}