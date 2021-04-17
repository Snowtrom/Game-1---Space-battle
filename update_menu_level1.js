

function updateLevel1(){

    if(b == 0){
        timer++;
        console.log(timer);


        if(timer == 200){
            song_level1.play();
            timer = 0
            b = 1;
        }
    }

    if(b == 1){
        sy1 ++;
        if(sy1 == 600)sy1 = -600;

        sy2 ++;
        if(sy2 == 600)sy2 = -600;
    }
}