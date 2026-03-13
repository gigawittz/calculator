document.body.style.backgroundColor="#2c3e50";
document.body.style.textAlign="center";
document.body.innerHTML=`<h1 style="font-family:cursive;diplay:"flex";padding:20px;margin:40px auto;">Calculator</h1>
<div id="base" style="padding:20px;margin:30px backgroundColor:"Teal";display:flex;">
<input type="number" id="num1"style="padding:20px;margin:30px backgroundColor:"Teal";diplay:"flex";"><hr>
<input type="number" id="num2"style="padding:20px;margin:30px backgroundColor:"Teal";diplay:"flex";"><hr>
<div style="display: flex; justify-content: center; gap: 10px; margin: 20px auto;">
    <button id="sum" style="padding: 10px; background-color: #f1c40f;">Add</button>
    <button id="minus" style="padding: 10px; background-color: #f1c40f;">Subtract</button>
    <button id="divide" style="padding: 10px; background-color: #f1c40f;">Divide</button>
    <button id="multiply" style="padding: 10px; background-color: #f1c40f;">Multiply</button>
<button id="clear" style="padding: 10px; background-color: #e8dae6;">Clear</button>
</div>
<input type="text" id="result"style="padding:20px;margin:30px backgroundColor:"Teal";diplay:"flex";"><hr>
`
function sum(){
const num1=Number(document.querySelector('#num1').value);
const num2=Number(document.querySelector('#num2').value);
    const num3 =num1+num2;
    return num3;
    }
function substract(){
const num1=Number(document.querySelector('#num1').value);
const num2=Number(document.querySelector('#num2').value);
    const num3 =num1-num2;
    return num3;
    }
function division(){
const num1=Number(document.querySelector('#num1').value);
const num2=Number(document.querySelector('#num2').value);
    const num3 =num1/num2;
    return num3;
    }
function multiplication(){
const num1=Number(document.querySelector('#num1').value);
const num2=Number(document.querySelector('#num2').value);
    const num3 =num1*num2;
    return num3;
    }
document.querySelector('#sum').addEventListener('click',()=>{
    document.querySelector('#result').value=`The answer is ${sum()}.`
});
document.querySelector('#minus').addEventListener('click',()=>{
    document.querySelector('#result').value=`The answer is ${substract()}.`
});
document.querySelector('#divide').addEventListener('click',()=>{
    document.querySelector('#result').value=`The answer is ${division()}.`
});
document.querySelector('#multiply').addEventListener('click',()=>{
    document.querySelector('#result').value=`The answer is ${multiplication()}.`
});
document.querySelector('#clear').addEventListener('click',()=>{
    document.querySelector('#result').value="";
    document.querySelector('#num1').value="";
    document.querySelector('#num2').value="";

});
