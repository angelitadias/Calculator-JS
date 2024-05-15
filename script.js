document.getElementById('display').value = '0'

function numero(value){
    document.getElementById('display').value += value;
}
function resultado(){
    try {
        document.getElementById('display').value =
        eval(document.getElementById('display').value);
    }
    catch(error){
        document.getElementById('display').value = 'ERRO';
    }
}
function limpar(){
    document.getElementById('display').value = '0';
    
}
function seno() {
    display.value = Math.sin(display.value);
}
  
function cosseno() {
    display.value = Math.cos(display.value);
}
  
function tangente() {
    display.value = Math.tan(display.value);
}

function log() {
    display.value = Math.log(display.value);
}
  
function pi() {
    display.value = 3.14;
}
  
function e() {
    display.value = 2.71;
}
function elev2(){
    diplay.value = Math.pow(diplay.value)
}
function elev3(){
    diplay.value = value**3
}
function apagarUltimo() {
    let display = document.getElementById('display');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function virgula() {
    let display = document.getElementById('display').value;
    if (!display.includes(',')) {
        document.getElementById('display').value += ',';
    }
}

document.addEventListener('keydown', function(event) {
    let key = event.key;
    if (!isNaN(key)) {
        numero(key);
    } else if (key === ',') {
        virgula();
    } else if (key === 'Backspace') {
        display.value = '';
    } else if (key === 'Enter') {
        resultado();
    } else if (['+', '-', '*', '/'].includes(key)) {
        operador(key);
    }
});

function operador(op) {
    lastValue = document.getElementById('display').value;
    currentOperation = op;
    document.getElementById('display').value = '';
}