const mongoose = require('mongoose');
 

const QuotesSchema = new mongoose.Schema({
    //fields that a quote table can have
    content: {
        type: String,
        required: [true, "Quote content is required:"],
        minlength: [5, "quote content must be at least 5 characters"]
    },
    author: {
        type: String,
        required: true
    },
    rating: Number
})

//register the above code as a table in mongodb
const Quote = mongoose.model('Quote', QuotesSchema)

module.exports = Quote;



// const UserSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });
 
