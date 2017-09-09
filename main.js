  var num1,num2,ans,oper;
  num1=prompt("Type any number");
  oper=prompt("Type an operator (+ = addition, - = subtraction, * = mutiplication, / = divide");
  num2=prompt("Type another number");
  if(oper=="+"){
    ans=parseFloat(num1)+parseFloat(num2);
  }
  else if(oper=="/"){
    ans=parseFloat(num1)/parseFloat(num2);
  }
  else if(oper=="*"){
    ans=parseFloat(num1)*parseFloat(num2);
  }
  else if(oper=="-"){
    ans=parseFloat(num1)-parseFloat(num2);
  }
    else if(oper=!null){
    ans="Error"
  }
  else if(num1=!null){
    ans="Error"
  }
  else if(num2=!null){
    ans="Error"
  }
  alert(ans);