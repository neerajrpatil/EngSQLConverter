const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=eaf0a35e57082239925184f43bf9b941&units=metric";
    https.get(url,function(request,response){
        console.log(response);

    })    
    res.send("Server is up and Running.")         

})//need to add https manually,browser , postman did it manualy 

app.listen(3000,(req,res)=>{
    console.log("listening to port 3000");
})