var randomNumber1=Math.ceil(Math.random() * 6);

var one=document.querySelector(".img1");
var ans="./images/dice"+randomNumber1+".png";
one.setAttribute("src",ans);

var randomNumber2=Math.ceil(Math.random() * 6);

var two=document.querySelector(".img2");
var ans="./images/dice"+randomNumber2+".png";
two.setAttribute("src",ans);

var headingVar=document.querySelector("h1");
if(randomNumber1>randomNumber2){
    headingVar.innerText=" 🚩 Player 1 wins";     //windows dot for flag
}else if(randomNumber1<randomNumber2){
    headingVar.innerText="Player 2 wins 🚩";
}else if(randomNumber1==randomNumber2){
    headingVar.innerText="It's a tie 🪢"
}
    



 

 

