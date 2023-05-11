let value = document.getElementById('counter');

let count = 0;

function add() {
    count++;
    value.innerText = count;
}

function minus() {
    if (count > 0) {
        count--;
        value.innerText = count;
    }
}

function reset() {
    count = 0;
    value.innerText = count;
}
