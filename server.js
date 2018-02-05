const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/app'));
app.use(express.static(__dirname+'/node_modules'));

app.all('/*',(req,res) => {
  res.sendFile("index.html",{root:__dirname+"/app"});
});
app.listen(port,()=>{
    console.log("Listening port:",3000);
});
