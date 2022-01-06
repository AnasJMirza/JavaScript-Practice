// Q - 01 Find modulas without using module sign (%)

// var number = parseInt(prompt("Enter a number : "))
// var divider = parseInt(prompt("Enter divider : "))

function reminder() {

    var number = parseInt(document.getElementById("number-01").value);
    var divider = parseInt(document.getElementById("divider-01").value);


    var rem = 0

    while (number >= divider) {
        number -= divider
    }

    rem = number
    document.getElementById("reminder").innerHTML = `Reminder = ${rem}`
}


// Question - 02 : replace a word from string withpout using javascript replace() function


function replace() {

    var string = document.getElementById('string').value;
    var toReplace = document.getElementById('toReplace').value;
    var replaceWith = document.getElementById('replaceWith').value;

    document.getElementById('old').innerHTML = `Old String : ${string}`

    
    for (let index = 0; index < string.length; index++) {
        if (string.slice(index, index + toReplace.length) == toReplace) {
            var previousString = string.slice(0, index - 1);
            var nextString = string.slice(index + toReplace.length + 1, string.length)
            var newString = previousString + " " + replaceWith + " " + nextString;
            document.getElementById('result-02').innerHTML = `New String : ${newString}`
        }
        
    }
}


// --------------------------------------------------------------------------------------------

// object practice

// var person = {
    
//     abid : {
//         city : "layyah",
//         country : "Pakistan"
//     }

// }   

// console.log(person.abid.city);


// -----------------------------------------------------------------------------------------------

// OOP in JavaScript

class person {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    calculateAge = (DOB) => {
        var age = 2021 - DOB;
        return age;
    }
}

var Anas = new person("Anas", 22);
console.log(Anas.calculateAge(1998));



