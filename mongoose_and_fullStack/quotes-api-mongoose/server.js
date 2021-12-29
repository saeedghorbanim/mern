const express = require("express");

const app = express();
const port = 8000;



// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );




require("./server/config/quotes.config");




app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );