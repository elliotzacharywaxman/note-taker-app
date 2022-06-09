const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path")
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3001;

app.get("/",(req,res) => { 
    console.log("get /")
    res.send("response test")
})

app.get("/notes",(req,res) => { 
    console.log("get /notes")
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

app.get("/api/notes",(req,res) => { 
    console.log("get api / notes")
    fs.readFile("./db/db.json", "utf-8", (err, content) => {
        console.log(content)
        const notes = JSON.parse(content)
    res.send(notes)
    })
});


app.post("/api/notes",(req,res) => { 
    console.log("post api / notes")
    console.log(req.body)
    const data = req.body
    
    const oldNotes =  fs.readFile("./db/db.json", "utf-8", (err, content) => {
        console.log(content)
        const notes = JSON.parse(content)
        notes.push(data)
        fs.writeFile("./db/db.json", JSON.stringify(notes, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
        
    });
    res.send("response test")
})

app.delete("/api/notes/:id",(req,res) => { 
    console.log("delete /api/notes")
    const data = req.body
    
    const oldNotes =  fs.readFile("./db/db.json", "utf-8", (err, content) => {
        console.log(content)
        const notes = JSON.parse(content)
        notes.pop(data)
        fs.writeFile("./db/db.json", JSON.stringify(notes, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
        
    });
    res.send("response test")
})

app.get("*",(req,res) => { 
    console.log("hello from root")
    res.sendFile(path.join(__dirname, "/public/index.html"))
})


app.listen(PORT, ()=> {
    console.log(`server on port ${PORT}`)
});