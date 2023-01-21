// function getName(name, age){
//     let merge = "This is my name " + name + " and my age is " + age;
//     return merge;
// }
// window.alert(getName("Usama",26))
/*
 Author : Usama
 Description: For calculator Development
 Version : 1.0v
*/
var valueOne = document.getElementById("valueOne");
// document.getElementById("test").innerHTML = "Test dfdf"
var valueTwo = document.getElementById("valueTwo");
var valueResult = document.getElementById("valueResult");

//Addition
function add() {
    let holder = parseInt(valueResult.value) + parseInt(valueOne.value) + parseInt(valueTwo.value);
    valueResult.value = holder;
}

function multi() {
    // console.log(valueOne.value);
    let holder = valueOne.value * valueTwo.value;
    valueResult.value = holder;

}

function did() {
    let holder =  valueOne.value / valueTwo.value;
    console.log(holder)
    valueResult.value = holder;
}

function sub() {
    let holder =  valueOne.value - valueTwo.value;
    valueResult.value = holder;
}