const $triangles = document.getElementsByClassName('triangle');
const $bisectriz = document.querySelector('#bisectriz');

//Para obtener los lados de un triangulo svg
function lado_poligono(lado, triangulo){
    // Formato de poligono points [190 0 3 140 297 140]
    let cadenas = triangulo.split(" ");
    //console.log(cadenas)
    let x1 = cadenas[0]
    //let y1 = cadenas[1]
    let x2 = cadenas[2]
    let y2 = cadenas[3]
    let x3 = cadenas[4]
    //let y3 = cadenas[5]
    if(lado == 'a'){
        return x3-x2;
    }
    else if(lado == 'b'){
        return Math.sqrt(Math.pow(y2,2) + Math.pow((x3-x1),2));
    }
    else if(lado == 'c'){
        return Math.sqrt(Math.pow(y2,2) + Math.pow((x1-x2),2));
    }
}
//Para obtener los angulos de un triangulo svg sale en radianes
function angulo_poligono(angulo, lado_a, lado_b, lado_c){
    if(angulo == 'a'){
        return Math.acos( (Math.pow(lado_a,2) - Math.pow(lado_b,2) - Math.pow(lado_c,2))  /  (-2*lado_b*lado_c));
    }
    else if(angulo == 'b'){
        return Math.acos( (Math.pow(lado_b,2) - Math.pow(lado_a,2) - Math.pow(lado_c,2))  /  (-2*lado_a*lado_c));
    }
    else if(angulo == 'c'){
        return Math.acos( (Math.pow(lado_c,2) - Math.pow(lado_a,2) - Math.pow(lado_b,2))  /  (-2*lado_a*lado_b));
    }
}

//Triangulos
    //Mediana
var triangulo1 = $triangles.item(0);





//Animar todos los triangulos
var lineaMediana = document.getElementsByClassName('linea').item(0);
var letraVerticeMediana = document.getElementsByClassName('letra_vertice').item(0);
function moverVertices() {
    for(let value of $triangles){
        if (valorX > 297) {
            direction = false
        }
        if(valorX < 3){
            direction = true;
        }
        if(direction){
            valorX = valorX+10;
        }
        else{
            valorX = valorX-10;
        }
        valorY = (140/21609)*Math.pow((valorX-150),2);
        value.setAttribute('points', valorX + ' ' + valorY + ', 3 140, 297 140');

        //Mediana
        lineaMediana.setAttribute('x1', valorX);
        lineaMediana.setAttribute('y1', valorY)
        letraVerticeMediana.setAttribute('x', valorX+30);
        letraVerticeMediana.setAttribute('y', valorY+20);

        //-270 = -4.71238898038469
        // -360 = -6.283185307179586
        let lado_a = lado_poligono("a", (valorX + ' ' + valorY + ' 3 140 297 140'));
        let lado_b = lado_poligono("b", (valorX + ' ' + valorY + ' 3 140 297 140'));
        let lado_c = lado_poligono("c", (valorX + ' ' + valorY + ' 3 140 297 140'));
        let angulo_b = (angulo_poligono("c",lado_a,lado_b,lado_c));
        let angulo_b_grados = angulo_b*(Math.PI/180);
        console.log(angulo_b_grados + ' : ' + (-(angulo_b_grados/2)-270))
        let angulo_total = 4.71238898038469-(angulo_b/2.0);   
        $bisectriz.style.setProperty('--angle-bisectriz', angulo_total+'rad');

    }
}
var valorX = 150;
var valorY = 0;
var direction = true;

setInterval(function(){moverVertices();},1000);
