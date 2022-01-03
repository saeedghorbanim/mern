const mongoose = require('mongoose'); //mongoose an interface to mongo db
//meaning that we can use mongoose to allow us to do crud commands and other
//db commands without doing the mongodb commands and instead we can use javascript
 

const NinjaSchema = new mongoose.Schema({
    //fields that a ninja table can have
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"]
    },
    numProjects: {
        type: Number,
        required: [true, "number of projects is required"]
    },
    graduationDate: {
        type: Date,
        required: [true, "Grad date is required"]
    },
    isVeteran: Boolean,
    profilePicUrl: String
})

//register the above code as a table in mongodb
const Ninja = mongoose.model('Ninja', NinjaSchema)

module.exports = Ninja;