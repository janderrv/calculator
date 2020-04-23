var lastNumber = "";
var currentNumber = "";
var result;
var operator = "";


//se numero atual tem menos de 8 digitos ele aceita mais digitos
increment = (number) => {
   if (currentNumber.length < 8) {
      return currentNumber = currentNumber + number;
   } else {
      return currentNumber;
   }
};
//faz as operações
operation = () => {
   if (operator == "+") {
      result = parseFloat(lastNumber) + parseFloat(currentNumber);
      result = result.toFixed(3);
      lastNumber = "";
      currentNumber = result.toString();
      operator = "";
   } else if (operator == "-") {
      result = parseFloat(lastNumber) - parseFloat(currentNumber);
      result = result.toFixed(3);
      lastNumber = "";
      currentNumber = result.toString();
      operator = "";
   } else if (operator == "*") {
      result = parseFloat(lastNumber) * parseFloat(currentNumber);
      result = result.toFixed(3);
      lastNumber = "";
      currentNumber = result.toString();
      operator = "";
   } else {
      result = parseFloat(lastNumber) / parseFloat(currentNumber);
      result = result.toFixed(3);
      lastNumber = "";
      currentNumber = result.toString();
      operator = "";
   }
};
show = () => {
   document.getElementById("result").value = lastNumber + operator + currentNumber;
};

btn0 = () => {
   currentNumber = increment("0");
   show();
};
btn1 = () => {
   currentNumber = increment("1");
   show();
};
btn2 = () => {
   currentNumber = increment("2");
   show();
};
btn3 = () => {
   currentNumber = increment("3");
   show();
};
btn4 = () => {
   currentNumber = increment("4");
   show();
};
btn5 = () => {
   currentNumber = increment("5");
   show();
};
btn6 = () => {
   currentNumber = increment("6");
   show();
};
btn7 = () => {
   currentNumber = increment("7");
   show();
};
btn8 = () => {
   currentNumber = increment("8");
   show();
};
btn9 = () => {
   currentNumber = increment("9");
   show();
};
btnAdd = () => {
   if (currentNumber.length > 0 && operator == "") {
      operator = "+";
      lastNumber = currentNumber;
      currentNumber = "";
      show();
   } else if ((lastNumber.length > 0 && currentNumber.length > 0) && operator != "") {
      operation();
      document.getElementById("result").value = result;
   }
}
btnSub = () => {
   if (currentNumber.length > 0 && operator == "") {
      operator = "-";
      lastNumber = currentNumber;
      currentNumber = "";
      show();
   } else if ((lastNumber.length > 0 && currentNumber.length > 0) && operator != "") {
      operation();
      document.getElementById("result").value = result;
   }
}
btnDiv = () => {
   if (currentNumber.length > 0 && operator == "") {
      operator = "/";
      lastNumber = currentNumber;
      currentNumber = "";
      show();
   } else if ((lastNumber.length > 0 && currentNumber.length > 0) && operator != "") {
      operation();
      document.getElementById("result").value = result;
   }
}
btnMult = () => {
   if (currentNumber.length > 0 && operator == "") {
      operator = "*";
      lastNumber = currentNumber;
      currentNumber = "";
      show();
   } else if ((lastNumber.length > 0 && currentNumber.length > 0) && operator != "") {
      operation();
      document.getElementById("result").value = result;
   }
}
btnEqu = () => {
   if ((lastNumber.length > 0 && currentNumber.length > 0) && operation != "") {
      operation();
      document.getElementById("result").value = result;
   }
};
btnC = () => {
   if (currentNumber.length > 1 && lastNumber.length > 0) {
      currentNumber = currentNumber.substring(0, (currentNumber.length - 1));
      show();
   } else if (currentNumber.length == 1 && lastNumber.length > 0) {
      currentNumber = "";
      show();
   } else if (operator != "") {
      currentNumber = lastNumber;
      lastNumber = "";
      operator = "";
      show();
   } else if (currentNumber.length > 1) {
      currentNumber = currentNumber.substring(0, (currentNumber.length - 1));
      show();
   } else {
      currentNumber = "";
      show();
   }
};
btnAC = () => {
   lastNumber = "";
   currentNumber = "";
   result = "";
   operator = "";
   show();
};