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