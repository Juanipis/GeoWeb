
/* Cuando se carga el doom */
document.addEventListener("DOMContentLoaded", function () { 
  const $escaleno = document.querySelector('#escaleno');
  
  

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  function changeAnimationTime() {
    $escaleno.style.setProperty('--width-a', getRandomArbitrary(0, 50) +'%');
    $escaleno.style.setProperty('--width-b', getRandomArbitrary(0, 40) +'%');
    $escaleno.style.setProperty('--width-c', getRandomArbitrary(90, 100) +'%');
    
  }
  setInterval(changeAnimationTime, 6000);

  var obtusangulo = document.getElementById('obtusangulo');
  var valorXObtuso = 100;
  var valorYObtuso = 90;
  var direction = true;
  function animate_obtusangulo(){
    
    //Manejamos un intervalo cerrado
    if (valorXObtuso > 150) {
      direction = false
    }
    if(valorXObtuso < 0){
      direction = true;
    }

    if(direction){
      valorXObtuso = valorXObtuso+0.1;
      valorYObtuso = (150/22500)*Math.pow((valorXObtuso-150),2); //Función cuadratica que describe el movimiento

    }
    else{
      valorXObtuso = valorXObtuso-0.1;
      valorYObtuso = (150/22500)*Math.pow((valorXObtuso-150),2);
    }
    

    obtusangulo.setAttribute('points', valorXObtuso +' ' + valorYObtuso + ', 150 150, 300 150')
  }
  
  setInterval(animate_obtusangulo, 1)
  
  }
);