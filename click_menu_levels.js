function checkIfClicked(x, y, o1, o2, r){
    if((x - o1) * (x - o1) + (y - o2) * (y - o2) > r*r){
        return false;
    }else{
        return true;
    }
}

function clickLevels(){
    if(menu == "levels"){
        
        if(mouseX >= 300 && mouseX <= 500 && mouseY >= 530 && mouseY <= 580){
            menu = "start";
        }


        //Pressing level 1 button
        if(checkIfClicked(mouseX, mouseY, 100, 105, 50) && level0){
            menu = "level1";
            song_start.stop();
        }


        //Pressing level 2 button
        if(checkIfClicked(mouseX, mouseY, 250, 105, 50) && level1){
            menu = "level2";
            song_start.stop();
            song_level2.play();
        }


        //Pressing level 3 button
        if(checkIfClicked(mouseX, mouseY, 400, 105, 50) && level2){
            menu = "level3";
            song_start.stop();
            song_level3.play();
        }


        //Pressing level 4 button
        if(checkIfClicked(mouseX, mouseY, 550, 105, 50) && level3){
            menu = "level4";
            song_start.stop();
            song_level4.play();
        }



        //Pressing level 5 button
        if(checkIfClicked(mouseX, mouseY, 700, 105, 50) && level4){
            menu = "level5";
            song_start.stop();
            song_level5.play();
        }





        //Pressing level 6 button
        if(checkIfClicked(mouseX, mouseY, 100, 280, 50) && level5){
            menu = "level6";
            song_start.stop();
            song_level6.play();
        }


        //Pressing level 7 button
        if(checkIfClicked(mouseX, mouseY, 250, 280, 50) && level6){
            menu = "level7";
            song_start.stop();
            song_level7.play();
        }


        //Pressing level 8 button
        if(checkIfClicked(mouseX, mouseY, 400, 280, 50) && level7){
            menu = "level8";
            song_start.stop();
            song_level8.play();
        }


        //Pressing level 9 button
        if(checkIfClicked(mouseX, mouseY, 550, 280, 50) && level8){
            menu = "level9";
            song_start.stop();
            song_level9.play();
        }


        //Pressing level 10 button
        if(checkIfClicked(mouseX, mouseY, 700, 280, 50) && level9){
            menu = "level10";
            song_start.stop();
            song_level10.play();
        }








        //Pressing level 11 button
        if(checkIfClicked(mouseX, mouseY, 100, 455, 50) && level10){
            menu = "level11";
            song_start.stop();
            song_level11.play();
        }


        //Pressing level 12 button
        if(checkIfClicked(mouseX, mouseY, 250, 455, 50) && level11){
            menu = "level12";
            song_start.stop();
            song_level12.play();
        }


        //Pressing level 13 button
        if(checkIfClicked(mouseX, mouseY, 400, 455, 50) && level12){
            menu = "level13";
            song_start.stop();
            song_level13.play();
        }


        //Pressing level 14 button
        if(checkIfClicked(mouseX, mouseY, 550, 455, 50) && level13){
            menu = "level14";
            song_start.stop();
            song_level14.play();
        }


        //Pressing level 15 button
        if(checkIfClicked(mouseX, mouseY, 700, 455, 50) && level14){
            menu = "level15";
            song_start.stop();
            song_level15.play();
        }





    }
}