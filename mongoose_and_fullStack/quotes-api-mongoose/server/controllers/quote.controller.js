const Quote = require("../models/quotes.model");

module.exports.helloWorld = (req, res) => {
    res.json({ message: "Hello World" });
}