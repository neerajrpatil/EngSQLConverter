// function nextSequence(event){
//     var randNumber=Math.floor(Math.random()*4);
    
// }
var count=0;
$(".btn").on("click",function(event){
    var t=event.target;
    $("#level-title").text("You are at level: "+count);
    count++;
    
    buttonAnimation(t.id);
    
    

    

    switch(t.id){
        case "green":
            var aud=new Audio('./sounds/green.mp3');
            aud.play();
            
            

            break;
            case "red":
                var aud=new Audio('./sounds/red.mp3');
                aud.play();
            break;
            case "yellow":
                var aud=new Audio('./sounds/yellow.mp3');
                aud.play();
            break;
            case "blue":
                var aud=new Audio('./sounds/blue.mp3');
                aud.play();
            break;
            default:
                var aud=new Audio('./sounds/wrong.mp3');
                aud.play();
                break;
    }
    // without switch cases, var aud= new Audio('./sounds'+t.id+'.mp3')would have also given the path 



})


function buttonAnimation(keyTypedClass){

    $("." + keyTypedClass).addClass("pressed");
    setTimeout(function (){
        $("." + keyTypedClass).removeClass("pressed");
       },1000)                
    
    
    
    
 }