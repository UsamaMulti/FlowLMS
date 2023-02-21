var arr = [];

arr.push("Fahad");
arr.push("Awwab");
arr.push("Suffyan");
console.log(arr);
arr.pop();
console.log(arr[0].toUpperCase());
var printPar = document.getElementById("printPar");

// for (let index = 0; index < arr.length; index++) {
//     // const element = array[index];
//     printPar.innerHTML += arr[index]  + " - " + index + "</br>";
// }

for (let index = 0; index < arr.length; index++) {
    // const element = array[index];
    if (arr[index] == "Suffyan") {
        console.log(index);
        printPar.innerHTML += arr[index] + " = Search Result" + "</br>";
        break;
    }else{
        printPar.innerHTML = "No Result" + "</br>";
    }
    
}