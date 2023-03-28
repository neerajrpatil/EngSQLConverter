const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
     res.sendFile(__dirname + "/index.html");
    
    
})

app.post("/",(req,res)=>{                //post req to path '/'  , form action specify where to send request
    
 var num1=Number(req.body.num1);
 var num2=Number(req.body.num2);                //use body parser before using req.body
 var result=num1+num2;                          //by default req.body returns text
 res.send("Answer is "+result);
})



app.listen(3000,(req,res)=>{
    console.log("listening to port 3000");
})