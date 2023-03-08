const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

let num1 = null; // перша введена цифра
let num2 = null; // друга введена цифра
let operator = null; // обраний оператор

buttons.forEach((btn, i) => {
  btn.addEventListener('click', function(e){
    if (isNaN(+this.innerText )) { // якщо кнопка не є цифрою
      switch (this.innerText) { // перевіряємо, яку кнопку натиснуто
        case 'C': // очищаємо екран
          display.value = '';
          break;
        case '+/-': // відʼємне число
          display.value = display.value * -1;
          break;
        case '%': // знаходимо відсоток
          display.value = display.value / 100;
          break;
        case '+': // додавання
          operator = '+';
          num1 = +display.value;
          display.value = '';
          break;
        case '-': // віднімання
          operator = '-';
          num1 = +display.value;
          display.value = '';
          break;
        case '*': // множення
          operator = '*';
          num1 = +display.value;
          display.value = '';
          break;
        case '/': // ділення
          operator = '/';
          num1 = +display.value;
          display.value = '';
          break;

        case '=': // обчислюємо результат
          num2 = +display.value;
          let result = 0; // присвоїли 0, бо видає в input значення undefined
          switch (operator) {
            case '+':
              result = num1 + num2;
              break;
            case '-':
              result = num1 - num2;
              break;
            case '*':
              result = num1 * num2;
              break;
            case '/':
              result = num1 / num2;
              break;
          }
          display.value = result;

					console.log(result)
      }
    } else { // якщо кнопка - цифра
      display.value += this.innerText; // щоб додавати значення при натисканні
    }
  })
})