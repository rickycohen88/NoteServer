let express = require("express");
const path = require("path");
const app = express();
const port = process.envPORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(path.join(_dirname,"index.html"));
});





app.listen(PORT,function(){
    console.log("App is rinning on port" + PORT);
});