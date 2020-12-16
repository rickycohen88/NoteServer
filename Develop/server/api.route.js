//Dependencies
const path = require("path");
const  fs = require("fs");
let id =0;

module.exports = function(app){
     app.get("/api/notes", function(req,res){
        console.log("recived request in noteRoute function");
        res.send(JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"))));
        //return res.sendFile(path.join__dirname,"..db/db.json");
    });
    app.post("/api/notes", function(req,res){
    console.log("have recived post");
    let notes = [];
    let newNote = req.body;

    notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));

    newNote.id = id;
    id++;

    notes.push(newNote);
    notes = JSON.stringify(notes);

    fs.writeFile(path.join(__dirname, "../db/db.json"), notes, (err) =>
    {
        if(err)
        {
            return console.log(err);
        }
        else
        {
            console.log("File Saved!");
        }

        res.end();
    });

    });
    app.delete("/api/notes/:id",function(req,res){
        let deleteID = req.params.id;

        let savedNotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
        let notes = savedNotes.filter(note =>
            {
                return note.id != deleteID;
            })
    
        notes = JSON.stringify(notes);
    
        fs.writeFile(path.join(__dirname, "../db/db.json"), notes, (err) =>
        {
            if(err)
            {
                return console.log(err);
            }
            else
            {
                console.log("File Saved!");
            }
    
            res.end();
        });
    });

};//end of export function




