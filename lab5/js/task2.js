const numVariant = 2;
const body = document.querySelector('body');

function generateRandomColor(element) {
    element.style.background = getRandomColor();
  }
  
function clearBackgroundColor(element) {
    element.style.getRandomColorbackground = '#FFF';
}

function randomNumber() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    return 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
}

function onOneClick(element) {
    element.style.background = document.getElementById('color_input').value;
}

for (let i = 0; i < 6; i++) {
    const rowEl = document.createElement('tr');

    for (let num = 0; num < 6; num++) {
        const index = String(num + 1 + (i * 6));

        const dataElement = document.createElement('td');

        dataElement.innerHTML = index;
        dataElement.id = index;

        rowEl.appendChild(dataElement);
        body.appendChild(rowEl);
    }
}

function onDoubleClick() {
    const startColumn = numVariant % 6;

    for (let j = startColumn; j <= 6; j++) {
        for (let i = 0; i < 6; i++) {
            const curEl = document.getElementById(String(j + i * 6));
            
            curEl.style.background = document.getElementById('color_input').value;
        }
    }
}

const elNumVariant = document.getElementById(String(numVariant));

elNumVariant.onmouseover = () => {
    generateRandomColor(elNumVariant);
};
elNumVariant.onmouseup = () => {
    onOneClick(elNumVariant);
};
elNumVariant.ondblclick = () => {
    onDoubleClick();
};