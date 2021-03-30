function changeSizeTriangleEscaleno(){
    let triangle = document.getElementById('escaleno');
    triangle.style.borderRight = getRandom(10, 20) + 'rem solid transparent';
    triangle.style.borderLeft = getRandom(10, 20) + 'rem solid transparent';
    triangle.style.borderBottom = getRandom(10, 20) + 'rem solid #f0ad4e';

}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}