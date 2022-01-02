const mongoose = require('mongoose');


//mongoose connection/config
mongoose.connect('mongodb://localhost/wall_of_ninjas_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
