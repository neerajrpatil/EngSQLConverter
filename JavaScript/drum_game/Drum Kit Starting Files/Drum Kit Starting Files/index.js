//similar to node.style.color="green"

var numberOfDrums=document.querySelectorAll(".drum").length
for(var i=0;i<numberOfDrums;i++){                      //hint, ** querrySelectorAll return array

 document.querySelectorAll(".drum")[i].addEventListener("click",function(event){
    makeSound(this.innerText);
    
    this.style.color="white";
    //this dint work with arrow function
 });
}
// function handleClick(){
//     var sound=new Audio("sounds/crash.mp3");
//     sound.play();
//     this.innerHtml="i got clicked";                //this referes to which ever invoked event listner

// }

//handleClick() with paranthesis will call fn without even clicking
//therefore just mention fn name or write anoymus function 






document.addEventListener('keypress',function(event){
    makeSound(event.key);

})                        //listent do whole document


function makeSound(key){
    switch(key){                //inner html  dint work
        case 'w':
            var sound=new Audio('./sounds/crash.mp3');
            sound.play();
            break;
            case 'a':
                var sound=new Audio('./sounds/tom-3.mp3');
            sound.play();

                break;
                case 's':var sound=new Audio('./sounds/tom-4.mp3');
                sound.play();
                break;
                case 'd':var sound=new Audio('./sounds/kick-bass.mp3');
                sound.play();
                    break;
                    case 'j':var sound=new Audio('./sounds/snare.mp3');
                    sound.play();
                    break;
                    case 'k':var sound=new Audio('./sounds/tom-1.mp3');
                    sound.play();
                    break;
                    case 'l':var sound=new Audio('./sounds/tom-2.mp3');
                    sound.play();
                        break;
                        default :
                        console.log("invalid");


    }

}
