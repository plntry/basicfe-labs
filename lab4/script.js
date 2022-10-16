const decimalColor = 15 + 15 * 16 + 15 * 16 ** 2 + 15 * 16 ** 3 + 15 * 16 ** 4 + 15 * 16 ** 5;

function getRandomColor() {
    return '#' + Math.floor(Math.random() * decimalColor).toString(16);
}

const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

function setRandomColors(elem) {
    elem.style.background = getRandomColor();
    elem.style.color = invertColor(rgb2hex(elem.style.background));
}

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);
    color = parseInt(color, 16);
    color = 0xFFFFFF ^ color;
    color = color.toString(16);
    color = ("000000" + color).slice(-6);
    color = "#" + color;
    return color;
}

document.getElementById('change-colors-first')?.addEventListener(
    'click', e => setRandomColors(e.currentTarget)
)

document.querySelector('.change-colors-second')?.addEventListener(
    'click', e => setRandomColors(e.currentTarget)
)

let addImgBtn = document.getElementById('add-img-btn');
let biggerImgBtn = document.getElementById('bigger-img-btn');
let smallerImgBtn = document.getElementById('smaller-img-btn');
let deleteImgBtn = document.getElementById('delete-img-btn');
let images = document.getElementById('images');

let countImg = 1;

addImgBtn.onclick = function() {
    let img = document.createElement('img');
    img.className = 'img';
    img.src = 'images/city.jpg';
    images.appendChild(img);
}

biggerImgBtn.onclick = function() {
    document.querySelectorAll('.img').forEach(el => {
        el.style.width = el.offsetWidth + 65 + 'px';
    });
}

smallerImgBtn.onclick = function() {
    document.querySelectorAll('.img').forEach(el => {
        el.style.width = el.offsetWidth - 65 + 'px';
    });
}

deleteImgBtn.onclick = function() {
    if (images.childElementCount === 1) {
        images.removeChild(images.lastChild);
    } else if (images.childElementCount === 0) {
        return 0;
    }
    images.removeChild(images.lastChild);
}