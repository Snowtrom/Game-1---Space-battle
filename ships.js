//Ship classes
class Ship1{
    constructor(){
        this.hp = 15;
        this.bd = 0;
        this.att = 5;
        this.rld = 50;
        this.mny = 0;
        this.cost = 0;
        this.owned = true;
    }

    draw(x, y, w, h){
        drawImage(playerShip1_blue, x, y, w, h);
    }
}

class Ship2{
    constructor(){
        this.hp = 35;
        this.bd = 5;
        this.att = 10;
        this.rld = 45;
        this.mny = 10;
        this.cost = 300;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip1_green, x, y, w, h)
    }
}

class Ship3{
    constructor(){
        this.hp = 70;
        this.bd = 10;
        this.att = 20;
        this.rld = 41;
        this.mny = 20;
        this.cost = 500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip1_orange, x, y, w, h)
    }
}

class Ship4{
    constructor(){
        this.hp = 150;
        this.bd = 20;
        this.att = 45;
        this.rld = 38;
        this.mny = 30;
        this.cost = 1000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip1_red, x, y, w, h)
    }
}

class Ship5{
    constructor(){
        this.hp = 300;
        this.bd = 45;
        this.att = 100;
        this.rld = 35;
        this.mny = 40;
        this.cost = 1500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip2_blue, x, y, w, h)
    }
}

class Ship6{
    constructor(){
        this.hp = 500;
        this.bd = 100;
        this.att = 150;
        this.rld = 32;
        this.mny = 50;
        this.cost = 2000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip2_green, x, y, w, h)
    }
}

class Ship7{
    constructor(){
        this.hp = 700;
        this.bd = 150;
        this.att = 200;
        this.rld = 30;
        this.mny = 60;
        this.cost = 3000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip2_orange, x, y, w, h)
    }
}

class Ship8{
    constructor(){
        this.hp = 1000;
        this.bd = 200;
        this.att = 250;
        this.rld = 28;
        this.mny = 70;
        this.cost = 4000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip2_red, x, y, w, h)
    }
}

class Ship9{
    constructor(){
        this.hp = 1300;
        this.bd = 250;
        this.att = 300;
        this.rld = 26;
        this.mny = 80;
        this.cost = 5000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip3_blue, x, y, w, h)
    }
}

class Ship10{
    constructor(){
        this.hp = 1500;
        this.bd = 300;
        this.att = 350;
        this.rld = 24;
        this.mny = 90;
        this.cost = 6000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip3_green, x, y, w, h)
    }
}

class Ship11{
    constructor(){
        this.hp = 2000;
        this.bd = 400;
        this.att = 400;
        this.rld = 22;
        this.mny = 95;
        this.cost = 7500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip3_orange, x, y, w, h)
    }
}


class Ship12{
    constructor(){
        this.hp = 3000;
        this.bd = 500;
        this.att = 500;
        this.rld = 20;
        this.mny = 100;
        this.cost = 10000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(playerShip3_red, x, y, w, h)
    }
}

//Ship Variable making
let ship1 = new Ship1();let ship2 = new Ship2();let ship3 = new Ship3();
let ship4 = new Ship4();let ship5 = new Ship5();let ship6 = new Ship6();
let ship7 = new Ship7();let ship8 = new Ship8();let ship9 = new Ship9();
let ship10 = new Ship10();let ship11 = new Ship11();let ship12 = new Ship12();

