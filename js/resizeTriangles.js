
/* Cuando se carga el doom */
document.addEventListener("DOMContentLoaded", function () { 
  var red = document.querySelector('#escaleno');

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  function changeAnimationTime() {
    red.style.setProperty('--width-a', getRandomArbitrary(0, 50) +'%');
    red.style.setProperty('--width-b', getRandomArbitrary(0, 40) +'%');
    red.style.setProperty('--width-c', getRandomArbitrary(90, 100) +'%');
  }
  setInterval(changeAnimationTime, 6000);
  }
);