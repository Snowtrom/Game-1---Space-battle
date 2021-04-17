function levelsClick(){

    if((isKeyPressed[27] || checkIfClicked(mouseX, mouseY, 780, 20, 10)) && b == 1){
        song_level1.stop();
        b = 2;
    }

    if(b == 2){
        //Restart BUTTON
        if(checkIfClicked(mouseX ,mouseY, 310, 300, 30)){
            //restart the level
        }

        //Play button
        if(checkIfClicked(mouseX ,mouseY, 400, 300, 30)){
            if(menu == "level1"){
                song_level1.play();
            }
            b = 1;
        }

        //Back button
        if(checkIfClicked(mouseX ,mouseY, 490, 300, 30)){
            song_start = new sound("F-777 - System Split.mp3");
            song_level1 = new sound("F-777 - As One (HQ).mp3");
            song_start.play();
            menu = "levels";
            b = 0;
        }
    }
}