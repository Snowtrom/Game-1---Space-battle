//Bullet classes
class Bullet1{
    constructor(){
        this.dmg = 5;
        this.cost = 0; 
        this.owned = true;
    }

    draw(x, y, w, h){
        drawImage(laserBlue[0], x, y, w, h);
    }
}

class Bullet2{
    constructor(){
        this.dmg = 10;
        this.cost = 150;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserBlue[1], x, y, w, h);
    }
}

class Bullet3{
    constructor(){
        this.dmg = 20;
        this.cost = 250;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserBlue[2], x, y, w, h);
    }
}

class Bullet4{
    constructor(){
        this.dmg = 30;
        this.cost = 450;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserGreen[0], x, y, w, h);
    }
}

class Bullet5{
    constructor(){
        this.dmg = 60;
        this.cost = 700;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserGreen[1], x, y, w, h);
    }
}

class Bullet6{
    constructor(){
        this.dmg = 100;
        this.cost = 800;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserGreen[2], x, y, w, h);
    }
}

class Bullet7{
    constructor(){
        this.dmg = 150;
        this.cost = 1000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserRed[0], x, y, w, h);
    }
}


class Bullet8{
    constructor(){
        this.dmg = 200;
        this.cost = 1500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserRed[1], x, y, w, h);
    }
}

class Bullet9{
    constructor(){
        this.dmg = 250;
        this.cost = 2000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserRed[2], x, y, w, h);
    }
}

class Bullet10{
    constructor(){
        this.dmg = 300;
        this.cost = 3000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[0], x, y, w, h);
    }
}

class Bullet11{
    constructor(){
        this.dmg = 350;
        this.cost = 3500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[1], x, y, w, h);
    }
}

class Bullet12{
    constructor(){
        this.dmg = 400;
        this.cost = 4000
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[2], x, y, w, h);
    }
}

class Bullet13{
    constructor(){
        this.dmg = 450;
        this.cost = 5000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[3], x, y, w, h);
    }
}

class Bullet14{
    constructor(){
        this.dmg = 500;
        this.cost = 5500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[4], x, y, w, h);
    }
}

class Bullet15{
    constructor(){
        this.dmg = 550;
        this.cost = 5800;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[5], x, y, w, h);
    }
}

class Bullet16{
    constructor(){
        this.dmg = 600;
        this.cost = 6000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[6], x, y, w, h);
    }
}

class Bullet17{
    constructor(){
        this.dmg = 650;
        this.cost = 6250;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[7], x, y, w, h);
    }
}

class Bullet18{
    constructor(){
        this.dmg = 700;
        this.cost = 6500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[8], x, y, w, h);
    }
}

class Bullet19{
    constructor(){
        this.dmg = 800;
        this.cost = 7000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[9], x, y, w, h);
    }
}

//Bullet Variable making
let bullet1 = new Bullet1();let bullet2 = new Bullet2();let bullet3 = new Bullet3();
let bullet4 = new Bullet4();let bullet5 = new Bullet5();let bullet6 = new Bullet6();
let bullet7 = new Bullet7();let bullet8 = new Bullet8();let bullet9 = new Bullet9();
let bullet10 = new Bullet10();let bullet11 = new Bullet11();let bullet12 = new Bullet12();
let bullet13 = new Bullet13();let bullet14 = new Bullet14();let bullet15 = new Bullet15();
let bullet16 = new Bullet16();let bullet17 = new Bullet17();let bullet18 = new Bullet18();
let bullet19 = new Bullet19();