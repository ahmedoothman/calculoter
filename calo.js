function sum() {
  var num =document.getElementsByName("firstn")[0].value;
  var num1=document.getElementsByName("sec")[0].value;
  var result= Number(num)+Number(num1);
  document.getElementById("o").value=result;
  document.getElementById("ope").value="+";
}
 function div() {
    var num =document.getElementsByName("firstn")[0].value;
    var num1=document.getElementsByName("sec")[0].value;
    var result= Number(num)/Number(num1);
    document.getElementById("o").value=result;
    document.getElementById("ope").value="/";
  }
  function sub() {
    var num =document.getElementsByName("firstn")[0].value;
    var num1=document.getElementsByName("sec")[0].value;
    var result= Number(num)-Number(num1);
    document.getElementById("o").value=result;
    document.getElementById("ope").value="-";
  }
  function multi() {
    var num =document.getElementsByName("firstn")[0].value;
    var num1=document.getElementsByName("sec")[0].value;
    var result= Number(num)*Number(num1);
    document.getElementById("o").value=result;
    document.getElementById("ope").value="*";
  }


 function clicke() {
    var num =document.getElementsByName("firstn")[0].value;
    //alert(num);
    var num1=document.getElementsByName("sec")[0].value;
    //alert(num1);
    var oper=document.getElementsByName("ope")[0].value;
    //alert(oper);
    switch(oper){
        case "+" :
       var result= Number(num)+Number(num1);
       break;
        case "-":
       var result= Number(num)-Number(num1);
       break;
        case "/":
       var result= Number(num)/Number(num1);
       break;  
       case "*":
       var result= Number(num)*Number(num1);
       break;
    default:
       var result= "not correct";
       
    }
    document.getElementById("o").value=result;
}




/*function clicke() {
var num =document.getElementsByName("firstn")[0].value;
//alert(num);
var num1=document.getElementsByName("sec")[0].value;
//alert(num1);
var oper=document.getElementsByName("ope")[0].value;
//alert(oper);
if( oper=="+"){
    var result= Number(num)+Number(num1);
}else if(oper=="-"){
    var result= Number(num)-Number(num1);
}else if(oper=="/"){
    var result= Number(num)/Number(num1);
}else if(oper=="*"){
    var result= Number(num)*Number(num1);
}else{
    var result= "not correct";
}


}*/

