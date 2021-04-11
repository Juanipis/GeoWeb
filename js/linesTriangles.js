
const $triangles = document.getElementsByClassName('triangle');
var lineaMediana = document.getElementsByClassName('linea').item(0);
var letraVerticeMediana = document.getElementsByClassName('letra_vertice').item(0);


function moverVerices() {
    for(let value of $triangles){
        if (valorX > 297) {
            direction = false
        }
        if(valorX < 3){
            direction = true;
        }
        if(direction){
            valorX = valorX+0.1;
        }
        else{
            valorX = valorX-0.1;
        }
        valorY = (140/21609)*Math.pow((valorX-150),2);
        value.setAttribute('points', valorX + ' ' + valorY + ', 3 140, 297 140');
        lineaMediana.setAttribute('x1', valorX);
        lineaMediana.setAttribute('y1', valorY)
        letraVerticeMediana.setAttribute('x', valorX+30);
        letraVerticeMediana.setAttribute('y', valorY+20);
    }
}
var valorX = 150;
var valorY = 0;
var direction = true;

setInterval(moverVerices, 2)
