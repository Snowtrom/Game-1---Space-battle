function drawLevels(){
    if(menu == "levels"){
        drawImage(backStars , 0, 0, 800, 600);
        context.beginPath();

        context.fillStyle = "purple";
        context.fillRect(300, 530, 200, 50);

        context.fillStyle = "white";
        context.font="italic small-caps bold 40px arial";
        context.fillText("Back", 350, 565);

        //Level 1
        context.beginPath();
        
        context.fillStyle = "green";
        context.arc(100 , 105, 50, 0, 2 * Math.PI);
        context.fill();
        
        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("1", 83, 123);



        //Level 2
        context.beginPath();
        
        if(level1){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(250 , 105, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("2", 233, 123);



        //Level 3
        context.beginPath();

        if(level2){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(400 , 105, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("3", 383, 123);



        //Level 4
        context.beginPath();

        if(level3){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(550 , 105, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("4", 533, 123);

        
        
        //Level 5
        context.beginPath();

        if(level4){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(700 , 105, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("5", 683, 123);
        
        
        
        //Level 6
        context.beginPath();

        if(level5){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(100 , 280, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("6", 83, 298);

        
        
        //Level 7
        context.beginPath();

        if(level6){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(250 , 280, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("7", 233, 298);

        
        
        //Level 8
        context.beginPath();

        if(level7){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(400 , 280, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("8", 383, 298);
        
        
        //Level 9
        context.beginPath();

        if(level8){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(550 , 280, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("9", 533, 298);
        
        

        //Level 10
        context.beginPath();
        
        if(level9){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(700 , 280, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("10", 663, 298);
        
        

        //Level 11
        context.beginPath();

        if(level10){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(100 , 455, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("11", 63, 473);
        
        
        //Level 12
        context.beginPath();

        if(level11){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(250 , 455, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("12", 213, 473);
        
        

        //Level 13
        context.beginPath();
        
        if(level12){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(400 , 455, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("13", 363, 473);
        
        

        //Level 14
        context.beginPath();
        
        if(level13){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(550 , 455, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("14", 513, 473);
        
        

        //Level 15
        context.beginPath();
        
        if(level14){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.arc(700 , 455, 50, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "white";
        context.font="italic small-caps bold 60px arial";
        context.fillText("15", 663, 473);
    }
}