//Dependencies
const path = require("path");

module.exports = function(app){
     app.get("/notes", function(req,res){
        console.log("recived request in noteRoute function");
        res.sendFile(path.join(__dirname,"../public/notes.html"));
    });
    app.get("/*", function(req,res){
        console.log("recived request in html function");
        res.sendFile(path.join(__dirname,"../public/index.html"));
    });

};//end of export function