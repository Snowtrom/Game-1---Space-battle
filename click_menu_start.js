function clickStart(){
    if(menu == "start"){
        
        if(mouseX >= 50 && mouseX <= 250 && mouseY >= 530 && mouseY <= 580){
            menu = "shop";
        }

        if(mouseX >= 300 && mouseX <= 500 && mouseY >= 530 && mouseY <= 580){
            menu = "levels";
        }

        if(mouseX >= 550 && mouseX <= 750 && mouseY >= 530 && mouseY <= 580){
            menu = "rules";
        }

    }
}