const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path")
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3001;

app.get("/",(req,res) => { 
    console.log("hello from root")
    res.send("response test")
})

app.get("/api/notes",(req,res) => { 
    console.log("hello from root")
    res.send("response test")
})

app.post("api/notes",(req,res) => { 
    console.log("hello from root")
    res.send("response test")
})

app.post("/api/notes",(req,res) => { 
    console.log("hello from root")
    res.send("response test")
})

app.get("*",(req,res) => { 
    console.log("hello from root")
    res.send("response test")
    return res.json
})


app.listen(PORT, ()=> {
    console.log(`server on port ${PORT}`)
});