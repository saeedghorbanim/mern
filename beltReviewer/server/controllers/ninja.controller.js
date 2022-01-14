const Ninja = require("../models/ninja.model");



module.exports.findAllNinjas = (req, res)=> {
    //looks to find all Quotes
    Ninja.find()
        .then(allNinjas=>{
            res.json({results: allNinjas})
        })
        .catch(err=>{
            res.json({err: err})
        })
}

module.exports.createNewNinja = (req, res)=> {
    Ninja.create(req.body)
        .then(newNinjaobj=>{
            res.json({results: newNinjaobj})
        })
        .catch(err=>{
            res.json({err: err})
        })
}


module.exports.findOneNinja = (req, res) => {
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

