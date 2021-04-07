
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
  }
);