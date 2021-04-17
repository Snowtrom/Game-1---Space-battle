//Start screen moving ship Variable
let startX = -200;

function updateStart(){
    if(menu == "start"){
        startX++;
        if(startX == 800)startX = -200;
    }
}