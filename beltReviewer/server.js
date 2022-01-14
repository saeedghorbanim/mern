const express = require("express"); //imports express which allows us to build a REST api
const cors = require("cors") //cross-origin-resource-sharing which allows the back end server to connect to react application to share data back and forth
const app = express();
const port = 8000;




// make sure these lines are above any app.get or app.post code blocks

app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form data
app.use(cors()); //tells the app that it is allowe to share resources with a react application

require("./server/config/config"); //so that we can connect to mongoose through config--> all mongoose connections instructions are in the config file

require("./server/routes/ninja.routes")(app) //for routes in the ninja.routes file 

app.listen( port, () => console.log(`Listening on port: ${port}`) ); //listen to port (in this case 8000) to present data there as webpage