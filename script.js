const btns=document.querySelectorAll('button');
const h1=document.querySelector('h1');
const clearBtn=document.getElementById('clrbtn');
let onetime=false;

let firstValue=0;
let operatorValue='';
let AwaitingNext=false;

//calculate first and second values depending on operator.
const calculate={
'/': (firstValue,secondnumber)=> firstValue / secondnumber,
'*': (firstValue,secondnumber)=> firstValue * secondnumber,
'+': (firstValue,secondnumber)=> firstValue + secondnumber,
'-': (firstValue,secondnumber)=> firstValue - secondnumber,
'=': (firstValue,secondnumber)=> secondnumber,



};

/// function to check if the value is zero it will display some value otherwise it will add some value
function SendNumbervalue(number){
 
 // Replace current display value if first value is entered.
 if(AwaitingNext){
    h1.textContent=number;
    AwaitingNext=false; 
 }
 else{
    const displayheading=h1.textContent;
     h1.textContent=displayheading==='0'?number:displayheading+number;    
     onetime=false;
 }
 
 
    
}

function addDecimal(){
    // If operator pressed, don't add decimal.
    if(AwaitingNext)return;
 // this is written by me   
    if(!onetime)
    {
    let decimaldot='.';
    let result=h1.textContent.concat(decimaldot);
    h1.textContent=result;
    onetime=true;
    }
  // this is from tutorial.
    // if(!h1.textContent.includes==='.'){
    //     h1.textContent=`${h1.textContent}.`;
    // }


}

function useOperator(operator){
// Prevent multiple operators
   
 if(operatorValue && AwaitingNext){
    operatorValue=operator;
    return; 
 }
    const currentValue=Number(h1.textContent);
// Assign firstValue if no value
if(!firstValue){
     firstValue=currentValue;
}else{
    console.log(firstValue,operatorValue ,currentValue);
    const calculation=calculate[operatorValue](firstValue,currentValue);
     h1.textContent=calculation;
    firstValue=calculation;
}

// Ready for next value, store operator
AwaitingNext=true;
operatorValue=operator;
console.log('firstValue',firstValue);
console.log('operator',operatorValue);

}

// function to clear all the values..
function ClearTheValues(){
    
     firstValue=0;
     operatorValue='';
     AwaitingNext=false;
        if(clearBtn!==null){
            h1.textContent='0';
            onetime=false;

            console.log("best friend");
        }


}
clearBtn.addEventListener('click', ClearTheValues);


// Add Event Listeners for numbers, operator, decimal buttons.

btns.forEach((inputbtns)=>{
if(inputbtns.classList.length===0){
    inputbtns.addEventListener('click', ()=> SendNumbervalue(inputbtns.value));

}
else if(inputbtns.classList.contains('decimal')){
   inputbtns.addEventListener('click',addDecimal);
}
else if(inputbtns.classList.contains('operators')){
    inputbtns.addEventListener('click',()=> useOperator(inputbtns.value));

}




});


    


