//Dependencies
const express = require("express");
const path = require("path");

//tells node we are creating an express server
const app = express();

// sets an the port to whatever is jiven by hardware or 3001
const PORT = process.envPORT || 3001;

//sets up express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')))
//Routes

//require("./api.route")(app);
require("./htmlRoute")(app);

// this is the listener, which essentially starts the server
app.listen(PORT,function(){
    console.log("App is rinning on port" + PORT);
}); 