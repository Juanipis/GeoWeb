
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
    
    l
  }
  setInterval(changeAnimationTime, 6000);

  var obtusangulo = document.getElementById('obtusangulo');
  var hola = obtusangulo.getAttribute('points');
  var valorXObtuso = 90.1;
  function animate_obtusangulo(){
    console.log("hola mundo");
    valorXObtuso = valorXObtuso+0.1;
    obtusangulo.setAttribute('points', '100 '+ valorXObtuso +', 150 150, 300 150')
  }
  
  setInterval(animate_obtusangulo, 20)
  
  }
);