const express = require("express");
const app = express();
const port = 8000;
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );




const quotesTable =[
    {content: "it always seems impossible until it is done", author:"Nelson Mandela"},
    {content: "Start where you are, use what you have. Do what you can  ", author:"Arthur Ashe"},
    {content: "If you are not willing to learn, no one can help you", author:"Saeed G"},
    {content: "A day without sunshine, is like night", author:"Steve Martin"},
    {content: "Consistency is more important than learning fast", author:"Ali"},

]
app.get("/api/",(req,res)=>{
    res.json({})
})

app.get("/api/quotes", (req,res)=> {
    res.json({
        data: quotesTable, 
        count: quotesTable.length})
}
)

app.post("/api/quotes", (req,res)=> {
    quotesTable.push(req.body)
    res.json({
        data: quotesTable, 
        count: quotesTable.length
    })
})

app.get("/api/quotes/:idx", (req,res)=> {
    console.log("request params is this--->", req.params)
    res.json({
        data: quotesTable[req.params.idx]
    })
})

app.put("/api/quotes/:idx", (req,res)=>{
    quotesTable[req.params.idx] = req.body
    res.json({
        count: quotesTable.length,
        data: quotesTable
    })
})

app.delete("/api/quotes/:idx", (req,res)=>{
    quotesTable.splice(req.params.idx, 1)
    res.json({
        count: quotesTable.length,
        data: quotesTable
    })
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );