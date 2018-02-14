
var mainText;
var numBtn = [];
var dotBtn;
var equalBtn;
var ansBtn;
var operatorBtn = {};
var totalOperator = 4;
var opKeys;
var mainS= "";
var subS = "";
var ans = "";

function setText(){
  mainText.text(mainS);
  subText.text(subS);
}

function numBtnHandler(n){
  return function(){
    mainS+=n;
    //subS+=n;
    setText();
  };
}
function operatorBtnHandler(operator){
  return function(){
    mainS += operator;
    //subS += " "+operator+" ";
    setText();
  };
}

function equalBtnHandler(){
  ans = Math.round((eval(mainS))*10000)/10000;
  subS=mainS+"="+ans;
  mainS = ans+"";
  
  setText();
  mainS=" ";
  
}

function clear() {
  mainS = " ";
  subS = "";
  setText();
}
function del(){
  console.log(mainS);
  mainS = mainS.length==1||mainS==""?" ":mainS.slice(0,mainS.length-1);
  //subS = subS.slice(0,subS.length-1);
  setText();
}

function ansBtnHandler(){
  mainS+=ans;
  setText();
  
}

$(document).ready(function(){
  mainText = $("#main");
  subText = $("#sub");
  dotBtn = $("#dot-btn");
  equalBtn = $("#equal-btn");
  ansBtn = $("#ans-btn");
  operatorBtn = {
    "+":$("#plus-btn"),
    "-":$("#minus-btn"),
    "*":$("#multiply-btn"),
    "/":$("#divide-btn")
  };
  opKeys = Object.keys(operatorBtn);
  
  dotBtn.click(numBtnHandler(dotBtn.text()));
  equalBtn.click(equalBtnHandler);
  $("#ac-btn").click(clear);
  $("#ce-btn").click(del);
  ansBtn.click(ansBtnHandler);
  for(var i=0;i<=9;i++){
    numBtn[i] = $("#"+i+"-btn");
    numBtn[i].click(numBtnHandler(numBtn[i].text()));
    console.log(numBtn[i]);
  }
  
  for(var i=0;i<opKeys.length;i++){
    operatorBtn[opKeys[i]].click(operatorBtnHandler(opKeys[i]));
  }
  
  
  
  
});