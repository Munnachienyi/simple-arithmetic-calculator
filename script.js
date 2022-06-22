const  num1=parseFloat(prompt('Enter first number'));
const operator=prompt('Enter operator(+,-,/,*,%)');
const  num2=parseFloat(prompt('Enter Second number'));



let result=0;
if(isNaN(num1) || isNaN(num2)){
  alert('Input Wrong,Refresh Page');
} 
else{
    if(operator =='+'){
        result = num1+num2;
    }
else if(operator =='-'){
      result = num1-num2;
}
else if(operator =='/'){
    result = num1 / num2;
}
else if(operator =='*'){
    result = num1 * num2;
}
else if(operator == '%'){
    result = num1 % num2;
}
 document.write(`${num1 + operator + num2}=${result}`)

}