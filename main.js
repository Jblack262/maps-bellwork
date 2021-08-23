
let q2Input = document.getElementById("q2");
let q3Input = document.getElementById("q3");

let q1Button = document.getElementById("q1Button");
let q2Button = document.getElementById("q2button");
let q3Button = document.getElementById("q3Button");

function button1Click() {
    let q1Input = document.getElementById("q1").value; //define what the user typed in the first input area
    let answer = capitalize(q1Input);//run the input through the function
    // console.log(answer);
    document.getElementById("answer1").innerHTML = answer;//write down the final output
    document.getElementById("q1").value = "";//clear the input area
}
function button2Click() {
    let q2Input = document.getElementById("q2").value; //define what the user typed in the first input area
    let answer = swapCase(q2Input);//run the input through the function
    // console.log(answer);
    document.getElementById("answer2").innerHTML = answer;//write down the final output
    document.getElementById("q2").value = "";//clear the input area
}
function button3Click() {
    let q3Input = document.getElementById("q3").value; //define what the user typed in the first input area
    let answer = shiftLetters(q3Input);//run the input through the function
    // console.log(answer);
    document.getElementById("answer3").innerHTML = answer;//write down the final output
    document.getElementById("q3").value = "";//clear the input area
}
function button4Click() {
    let q4Input = document.getElementById("q4").value; //define what the user typed in the first input area
    let answer = unshiftLetters(q4Input);//run the input through the function
    // console.log(answer);
    document.getElementById("answer4").innerHTML = answer;//write down the final output
    document.getElementById("q4").value = "";//clear the input area
}

function capitalize(string) {
    let array = [string]
    return array.map(y => y.toUpperCase());
}
function swapCase(string) {
    let array = string.split(" ");
    //console.log(array);
    for (wordIndex in array) {
        if (wordIndex % 2 == 0) {//if the index is even make it uppercase
            array[wordIndex] = array[wordIndex].toUpperCase();
        }
    }
    let result = "";
    for (word of array) { //returns the array back into a normal string
        result += word + " ";
    }
    return result;
}
function shiftLetters(string) {
    let letterCodes = [];
    for (i = 0; i < string.length; i++) {//gets the codes for each character and pushes it to an array
        letterCodes.push(string.charCodeAt(i));
    }
    // console.log(letterCodes);
    let result = "";//create an empty string to put the final result into
    for (code of letterCodes) {
        (code != 32) ? (code ++) : '';//if there is a space in the string is stays as a space
        result += String.fromCharCode(code);
    }
    return result;
}

function unshiftLetters(string) {
    let letterCodes = [];
    for (i = 0; i < string.length; i++) {//gets the codes for each character and pushes it to an array
        letterCodes.push(string.charCodeAt(i));
    }
    // console.log(letterCodes);
    let result = "";//create an empty string to put the final result into
    for (code of letterCodes) {
        (code != 32) ? (code --) : '';//if there is a space in the string is stays as a space
        result += String.fromCharCode(code);
    }
    return result;
}