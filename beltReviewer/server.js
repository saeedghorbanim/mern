const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;




// make sure these lines are above any app.get or app.post code blocks

app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form data
app.use(cors()); //tells the app that it is allowe to share resources with a react application

require("./server/config/config");

require("./server/routes/ninja.routes")(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );