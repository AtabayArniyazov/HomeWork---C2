"use strict";

// возвращает массив корней
function SquareRoots(a, b, c) {
    if (a === 0) {
        return [ - c / b];  

    } else {
        var d = b * b - 4 * a * c; // дискриминант

        if (d < 0)
            return []; // нет корней

        if (d == 0)
            return [- b / (2 * a)]; // один корень

        var x1 = (- b + Math.sqrt(d)) / (2 * a);
        var x2 = (- b - Math.sqrt(d)) / (2 * a);
        return [x1, x2]; // два корня
    }
}

// находим корни квадратного уравнения
function inputValueOfSquareRoots() {            //названия функции (ТТТ) поменяли на нормальное название(inputValueOfSquareRoots)
    var a = Number(prompt('Введите a'));
    var b = Number(prompt('Введите b'));
    var c = Number(prompt('Введите c'));
    var RootsA = SquareRoots(a, b, c);

    if (!RootsA.length)
        alert('корней нет!');
    else if (RootsA.length == 1)
        alert('один корень: ' + RootsA[0]);
    else
        alert('два корня: ' + RootsA[0] + ' и ' + RootsA[1]);
};

var buttonSquare = document.getElementById('square');
buttonSquare.onclick = inputValueOfSquareRoots;