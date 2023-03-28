var express=require("express");
var app=express();
var bodyPraser=require("body-parser");
app.use(bodyPraser.urlencoded({extended:true}));

//Just opening ig get request
app.get("/",function (req,res){
    
    res.sendFile(__dirname+"/index.html");
})

app.post("/calculate",(req,res)=>{
    var h=parseFloat(req.body.height) /100;
    var w=parseFloat(req.body.weight);
    var result=w /(h * h);
    res.send("Your Body Mass Index is: "+ result);
})


app.listen(3000,(req,res)=>{
    console.log("listening to port 3000");
})