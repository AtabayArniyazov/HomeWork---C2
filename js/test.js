"use strict";

var buttonSquareRoots_Tests = document.getElementById('squareRoots_Tests');
buttonSquareRoots_Tests.onclick = SquareRoots_Tests;

function SquareRoots_Tests() {
    console.log('тест 1,1,1 -> нет корней');
    var RootsA=SquareRoots(1,1,1);
    console.log( (RootsA.length==0)?'пройден':'НЕ ПРОЙДЕН!' );

    console.log('тест 1,-2,-3 -> два корня 3,-1');
    var RootsA=SquareRoots(1,-2,-3);
    console.log( ((RootsA.length==2)&&(RootsA[0]==3)&&(RootsA[1]==-1))?'пройден':'НЕ ПРОЙДЕН!' );

    console.log('тест -1,-2,15 -> два корня -5,3');
    var RootsA=SquareRoots(-1,-2,15);
    console.log( ((RootsA.length==2)&&(RootsA[0]==-5)&&(RootsA[1]==3))?'пройден':'НЕ ПРОЙДЕН!' );

    console.log('тест 1,12,36 -> один корень -6');
    var RootsA=SquareRoots(1,12,36);
    console.log( ((RootsA.length==1)&&(RootsA[0]==-6))?'пройден':'НЕ ПРОЙДЕН!' );

    console.log('тест 0,5,-5 -> один корень 1');
    var RootsA=SquareRoots(0,5,-5);
    console.log( ((RootsA.length==1)&&(RootsA[0]==1))?'пройден':'НЕ ПРОЙДЕН!' );

    // + ещё тесты
    console.log('тест 1,5,0 -> два корня 0,-5');
    var RootsA=SquareRoots(1,5,0);
    console.log( ((RootsA.length==2)&&(RootsA[0]==0))?'пройден':'НЕ ПРОЙДЕН!' );

    console.log('тест 6,0,0 -> один корень 0');
    var RootsA=SquareRoots(6,0,0);
    console.log( ((RootsA.length==1)&&(RootsA[0]==0))?'пройден':'НЕ ПРОЙДЕН!' );  

    console.log('тест 1,3,-4 -> два корня 1,-4');
    var RootsA=SquareRoots(1,3,-4);
    console.log( ((RootsA.length==2)&&(RootsA[0]==1))?'пройден':'НЕ ПРОЙДЕН!' );   

    console.log('тест -6,-5,-1 -> два корня -0.5, -0.333');
    var RootsA=SquareRoots(-6,-5,-1);
    console.log( ((RootsA.length==2)&&(RootsA[0]== -0.5))?'пройден':'НЕ ПРОЙДЕН!' );    

    console.log('тест 1,-1,-2 -> два корня 2, -1');
    var RootsA=SquareRoots(1,-1,-2);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 2))?'пройден':'НЕ ПРОЙДЕН!' );

    console.log('тест 6,-5,-1 -> два корня 1, -0.167');
    var RootsA=SquareRoots(6,-5,-1);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 1))?'пройден':'НЕ ПРОЙДЕН!' );   

    console.log('тест 8,-6,1 -> два корня 0.5, 0.25');
    var RootsA=SquareRoots(8,-6,1);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 0.5))?'пройден':'НЕ ПРОЙДЕН!' );    

    console.log('тест 1,6,9 -> один корень -3');
    var RootsA=SquareRoots(1,6,9);
    console.log( ((RootsA.length==1)&&(RootsA[0]== -3))?'пройден':'НЕ ПРОЙДЕН!' );  

    console.log('тест 2,4,7 -> нет корней');
    var RootsA=SquareRoots(2,4,7);
    console.log( (RootsA.length==0)?'пройден':'НЕ ПРОЙДЕН!' );

    console.log('тест 1,-5,4 -> два корня 4, 1');
    var RootsA=SquareRoots(1,-5,4);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 4))?'пройден':'НЕ ПРОЙДЕН!' );

    console.log('тест 1,-3,2 -> два корня 2, 1');
    var RootsA=SquareRoots(1,-3,2);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 2))?'пройден':'НЕ ПРОЙДЕН!' );   

    console.log('тест 1,-13,12 -> два корня 12, 1');
    var RootsA=SquareRoots(1,-13,12);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 12))?'пройден':'НЕ ПРОЙДЕН!' );    

    console.log('тест 1,-7,12 -> два корня 4, 3');
    var RootsA=SquareRoots(1,-7,12);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 4))?'пройден':'НЕ ПРОЙДЕН!' );  

    console.log('тест 1,-15,26 -> два корня 13, 2');
    var RootsA=SquareRoots(1,-15,26);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 13))?'пройден':'НЕ ПРОЙДЕН!' );    

    console.log('тест 1,14,45 -> два корня -5, -9');
    var RootsA=SquareRoots(1,14,45);
    console.log( ((RootsA.length==2)&&(RootsA[0]== -5))?'пройден':'НЕ ПРОЙДЕН!' );    

    console.log('тест 1,3,-70 -> два корня 7, -10');
    var RootsA=SquareRoots(1,3,-70);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 7))?'пройден':'НЕ ПРОЙДЕН!' );    

    console.log('тест 1,-12,35 -> два корня 7, 5');
    var RootsA=SquareRoots(1,-12,35);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 7))?'пройден':'НЕ ПРОЙДЕН!' );    

    console.log('тест 1,-9,20 -> два корня 5, 4');
    var RootsA=SquareRoots(1,-9,20);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 5))?'пройден':'НЕ ПРОЙДЕН!' );

    console.log('тест 1,-20,-69 -> два корня 23, -3');
    var RootsA=SquareRoots(1,-20,-69);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 23))?'пройден':'НЕ ПРОЙДЕН!' );   

    console.log('тест 1,-13,12 -> два корня 12, 1');
    var RootsA=SquareRoots(1,-13,12);
    console.log( ((RootsA.length==2)&&(RootsA[0]== 12))?'пройден':'НЕ ПРОЙДЕН!' );    
}