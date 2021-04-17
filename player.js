let takenDmg = 0;
function playerShip(num, x, y, w, h){
    switch(num){
        case 1: ship1.draw(x, y, w, h);break;
        case 2: ship2.draw(x, y, w, h);break;
        case 3: ship3.draw(x, y, w, h);break;
        case 5: ship5.draw(x, y, w, h);break;
        case 4: ship4.draw(x, y, w, h);break;
        case 6: ship6.draw(x, y, w, h);break;
        case 7: ship7.draw(x, y, w, h);break;
        case 8: ship8.draw(x, y, w, h);break;
        case 9: ship9.draw(x, y, w, h);break;
        case 10: ship10.draw(x, y, w, h);break;
        case 11: ship11.draw(x, y, w, h);break;
        case 12: ship12.draw(x, y, w, h);break;
    }
}


function updatePlayer(){
    if(pShip == 1){
        totalhp = hpBonus + ship1.hp;
        totalbd = bdBonus + ship1.bd;
        totalatt = attBonus + ship1.att;
        totalrld = rldBonus + ship1.rld;
        totalmny = mnyBonus + ship1.mny;
    }

    if(pShip == 2){
        totalhp = hpBonus + ship2.hp;
        totalbd = bdBonus + ship2.bd;
        totalatt = attBonus + ship2.att;
        totalrld = rldBonus + ship2.rld;
        totalmny = mnyBonus + ship2.mny;
    }

    if(pShip == 3){
        totalhp = hpBonus + ship3.hp;
        totalbd = bdBonus + ship3.bd;
        totalatt = attBonus + ship3.att;
        totalrld = rldBonus + ship3.rld;
        totalmny = mnyBonus + ship3.mny;
    }

    if(pShip == 4){
        totalhp = hpBonus + ship4.hp;
        totalbd = bdBonus + ship4.bd;
        totalatt = attBonus + ship4.att;
        totalrld = rldBonus + ship4.rld;
        totalmny = mnyBonus + ship4.mny;
    }

    if(pShip == 5){
        totalhp = hpBonus + ship5.hp;
        totalbd = bdBonus + ship5.bd;
        totalatt = attBonus + ship5.att;
        totalrld = rldBonus + ship5.rld;
        totalmny = mnyBonus + ship5.mny;
    }

    if(pShip == 6){
        totalhp = hpBonus + ship6.hp;
        totalbd = bdBonus + ship6.bd;
        totalatt = attBonus + ship6.att;
        totalrld = rldBonus + ship6.rld;
        totalmny = mnyBonus + ship6.mny;
    }

    if(pShip == 7){
        totalhp = hpBonus + ship7.hp;
        totalbd = bdBonus + ship7.bd;
        totalatt = attBonus + ship7.att;
        totalrld = rldBonus + ship7.rld;
        totalmny = mnyBonus + ship7.mny;
    }

    if(pShip == 8){
        totalhp = hpBonus + ship8.hp;
        totalbd = bdBonus + ship8.bd;
        totalatt = attBonus + ship8.att;
        totalrld = rldBonus + ship8.rld;
        totalmny = mnyBonus + ship8.mny;
    }

    if(pShip == 9){
        totalhp = hpBonus + ship9.hp;
        totalbd = bdBonus + ship9.bd;
        totalatt = attBonus + ship9.att;
        totalrld = rldBonus + ship9.rld;
        totalmny = mnyBonus + ship9.mny;
    }

    if(pShip == 10){
        totalhp = hpBonus + ship10.hp;
        totalbd = bdBonus + ship10.bd;
        totalatt = attBonus + ship10.att;
        totalrld = rldBonus + ship10.rld;
        totalmny = mnyBonus + ship10.mny;
    }

    if(pShip == 11){
        totalhp = hpBonus + ship11.hp;
        totalbd = bdBonus + ship11.bd;
        totalatt = attBonus + ship11.att;
        totalrld = rldBonus + ship11.rld;
        totalmny = mnyBonus + ship11.mny;
    }

    if(pShip == 12){
        totalhp = hpBonus + ship12.hp;
        totalbd = bdBonus + ship12.bd;
        totalatt = attBonus + ship12.att;
        totalrld = rldBonus + ship12.rld;
        totalmny = mnyBonus + ship12.mny;
    }





    switch(pBullet){
        case 1: totalatt += bullet1.dmg;break;
        case 2: totalatt += bullet2.dmg;break;
        case 3: totalatt += bullet3.dmg;break;
        case 4: totalatt += bullet4.dmg;break;
        case 5: totalatt += bullet5.dmg;break;
        case 6: totalatt += bullet6.dmg;break;
        case 7: totalatt += bullet7.dmg;break;
        case 8: totalatt += bullet8.dmg;break;
        case 9: totalatt += bullet9.dmg;break;
        case 10: totalatt += bullet10.dmg;break;
        case 11: totalatt += bullet11.dmg;break;
        case 12: totalatt += bullet12.dmg;break;
        case 13: totalatt += bullet13.dmg;break;
        case 14: totalatt += bullet14.dmg;break;
        case 15: totalatt += bullet15.dmg;break;
        case 16: totalatt += bullet16.dmg;break;
        case 17: totalatt += bullet17.dmg;break;
        case 18: totalatt += bullet18.dmg;break;
        case 19: totalatt += bullet19.dmg;break;
    }
}
