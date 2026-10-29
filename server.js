const Database = require("better-sqlite3");
const express = require("express");
const db = new Database("notes.db");
const cors = require("cors");
const app = express();

db.prepare(`
    CREATE TABLE IF NOT EXISTS notes(
id INTEGER PRIMARY KEY AUTOINCREMENT,
content TEXT NOT NULL
    )`).run();

    app.use(cors());
    app.use(express.json());


app.post("/notes", function(req,res){
console.log(req.body);
const savedNotes = req.body.content;
const result = db.prepare("INSERT INTO notes (content) VALUES (?)").run(savedNotes);
const id = result.lastInsertRowid;
res.json({message:"note received", id});

});

    app.get ("/notes", function(req, res){
const rows = db.prepare("SELECT * FROM notes").all();
res.json(rows);
    });
app.delete("/notes/:id", function(req, res){
    db.prepare("DELETE FROM notes WHERE id = ?").run(req.params.id);
    res.json({message: "note deleted"});
});

    app.listen (3000, function(){
        console.log("server running");
    });

    