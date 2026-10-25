
const express = require("express");
const cors =require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", function(req, res){
    res.send("your backend is working");
});
app.post("/notes", function (req ,res){
    console.log(req.body.content);
    res.json({message: "note received!"})
});
app.listen(3000, function (){
    console.log("server running on port 3000");
});

