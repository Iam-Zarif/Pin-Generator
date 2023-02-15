
function randomNumber(){
    let random = Math.round(Math.random()*10000);
    
    if (random.toString().length < 4) {
        
      return randomNumber();
    }
     else {
      return random;
    }
}
let num = randomNumber();
console.log(num);
// 
document.getElementById("btn-pin").addEventListener('click',function(){
    let btnInput = document.getElementById("btn-input");

    btnInput.value = randomNumber();
});

// 
document.getElementById("calc-body").addEventListener('click',function(event){
// console.log(event.target.innerText);
let Num = parseInt(event.target.innerText);
let InputNum = document.getElementById("user-input");
let typenum = InputNum.value;
// console.log(Num);
if(isNaN(Num)){
  if (event.target.innerText === "C") {
    InputNum.value = "";
  }
  else if(event.target.innerText === "<"){
    let digits = typenum.split('');
     digits.pop();
    let digitFinal = digits.join('');
    InputNum.value = digitFinal;
  }
}
else{
  
  
  let typenum1 = typenum + Num;
  InputNum.value = typenum1;
}
});

document.getElementById("submit").addEventListener('click' , function(){
  let input1 = document.getElementById("btn-input");
  let input2 = document.getElementById("user-input");
 
  let input1Num = parseInt(input1.value);
  let input2Num = parseInt(input2.value);

  if(input1Num === input2Num){
    let success = document.getElementById("pin-success");
    success.style.display = 'block';
    // 
    let fail = document.getElementById("pin-fail");
    fail.style.display = "none";
  }
  else{
    let fail = document.getElementById("pin-fail");
    fail.style.display = 'block';
    // 
    let success = document.getElementById("pin-success");
    success.style.display = "none";
  }
  
});


