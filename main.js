  var num1,num2,ans,oper;
  num1=prompt("Type any number");
  oper=prompt("Type an operator (+ = addition, - = subtraction, * = mutiplication, / = divide, ^ = power, or sqrt for the square root (Note: a second number is not needed for this function).");
  num2=prompt("Type another number");
  if(oper==="+"){
    ans=parseFloat(num1)+parseFloat(num2);
  }
  else if(oper==="/"){
    ans=parseFloat(num1)/parseFloat(num2);
  }
  else if(oper==="*"){
    ans=parseFloat(num1)*parseFloat(num2);
  }
  else if(oper==="-"){
    ans=parseFloat(num1)-parseFloat(num2);
  }
  else if(oper==="^"){
    ans=Math.pow(num1,num2);
  }
  else if (oper==="sqrt"){
    ans=Math.sqrt(num1);
  }
  else if(oper=!null){
    ans="Error: Please enter a operator."
  }
  else if(num1=!null){
    ans="Error: Please enter a number."
  }
  else if(num2=!null){
    ans="Error: Please enter a number."
  }
  alert('The answer is ' + ans);