const Ninja = require("../models/ninja.model");



module.exports.findAllNinjas = (req, res)=> {
    //looks to find all Quotes
    //the find method is a built-in method getting it from the model which is 
    //Ninja (created a model instance up top)
    Ninja.find()
        .then(allNinjas=>{
            res.json({results: allNinjas})
        })
        .catch(err=>{
            res.json({err: err})
        })
}

module.exports.createNewNinja = (req, res)=> {
    //req.body is requesting data to post into the database from postman or front-end form
    //so basically it creates a new user or information in the database
    Ninja.create(req.body)
        .then(newNinjaobj=>{
            res.json({results: newNinjaobj})
        })
        .catch(err=>{
            res.json({err: err})
        })
}


module.exports.findOneNinja = (req, res) => {
    //getting a ninja from its id through mongo (in mongoose we use _id as the id indicater)
    //req.params.id is gaining the id from the url route to find it from the database
    Ninja.findOne({_id:req.params.id})
        .then(foundNinja=>{
            res.json({results: foundNinja})
        })
        .catch(err=>{
            res.json({err: err})
        })
}

module.exports.updateExistingNinja = (req, res) => {
    Ninja.findOneAndUpdate(
        //req.params is trying to get data from the route (for example the id in the route)
        //idSpecific is what req.params is trying to get from the url
        { _id: req.params.idSpecific }, //find the object whose _id == req.params.idSpecific
        req.body, //is the information from the form (in this case we used postman, we use form later for fullstack) to update with
        //new: true means return the updated info, runValidators means if we wrote any validation for this part, check it
        { new: true, runValidators: true }
    )
        .then(updatedNinja => {
            res.json({results: updatedNinja })
        })
        .catch(err=>{
            res.json({err: err})
        })
}


module.exports.deleteNinja = (req, res) => {
    Ninja.deleteOne({_id:req.params.id})
        .then(deletedNinja=>{
            res.json({results: deletedNinja})
        })
        .catch(err=>{
            res.json({err: err})
        })
}

