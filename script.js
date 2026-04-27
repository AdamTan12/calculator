let output = ''
let cur_op = ''
let cur = ''

function updateDisplay() {
    if (cur_op != '=')
        document.querySelector('#display').textContent = output + cur_op + cur
    else 
        document.querySelector('#display').textContent = output
}
function handleDigit(value) {
    if (cur_op != '=') {
        cur += value
        updateDisplay()
    }
    else {
        clearAll()
        cur += value
        updateDisplay()
    }
}
function clearAll() {
    cur = ''
    cur_op = ''
    output = ''
    updateDisplay()
}
function add() {
    do_operand()
    cur_op = '+'
    cur = ''
    updateDisplay()
}
function minus() {
    do_operand()
    cur_op = '-'
    cur = ''
    updateDisplay()
}
function multiply() {
    do_operand()
    cur_op = 'x'
    cur = ''
    updateDisplay()
}
function divide() {
    do_operand()
    cur_op = '/'
    cur = ''
    updateDisplay()
}
function equal() {
    do_operand()
    cur_op = '='
    cur = ''
    updateDisplay()
}
function do_operand() {
    if (cur_op == '' || cur_op == '=') {
        if (output == 0)
            output = parseFloat(cur)
        cur = ''
    }
    else if (cur_op == '+') {
        output += parseFloat(cur)
    }
    else if (cur_op == '-') {
        output -= parseFloat(cur)
    }
    else if (cur_op == 'x') {
        output *= parseFloat(cur)
    }
    else if (cur_op == '/') {
        output /= parseFloat(cur)
    }
}