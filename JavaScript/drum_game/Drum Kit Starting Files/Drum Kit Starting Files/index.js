//similar to node.style.color="green"

var numberOfDrums=document.querySelectorAll(".drum").length
for(var i=0;i<numberOfDrums;i++){                      //hint, ** querrySelectorAll return array

 document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
    alert("i was clicked");
}

//handleClick() with paranthesis will call fn without even clicking
//therefore just mention fn name or write anoymus function 

