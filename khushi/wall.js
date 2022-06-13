function f(y) {
    if (y == 'c') {
        document.getElementById('box').value = "";
        return;
    }
    box = document.getElementById('box').value;
    if (box == 0 && y == 0)
        return;
    if (y == '+' || y == '-' || y == '*' || y == '/') {
        opr = y;
        number = parseFloat(box);
        document.getElementById('box').value = y;
        return;
    }
    if (y == '=') {
        number1 = parseFloat(box);
        switch (opr) {
            case '+':
                answer = number + number1;
                break;
            case '-':
                answer = number - number1;
                break;
            case '*':
                answer = number * number1;
                break;
            case '/':
                answer = parseInt(number / number1);
                break;
        }
        document.getElementById('box').value = answer;
        return;
    }
    if (!isNaN(document.getElementById('box').value)) {
        document.getElementById('box').value += y;
    } else
        document.getElementById('box').value = y;
}