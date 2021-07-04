//Business Logic
function robogersSound(userNumber) {
    let numArray = [];
    for (let i = 0; i <= userNumber; i++) {
        if (i === 1) {
            numArray.push("Beep!");
        } else if (i === 2) {
            numArray.push("Boop!");
        } else if (i === 3) {
            numArray.push("Won't you be my neighbor?");
        } else if (i.toString().includes(3)) {
            numArray.push("Won't you be my neighbor?");
        } else if (i.toString().includes(2)) {
            numArray.push("Boop!");
        } else if (i.toString().includes(1)) {
            numArray.push("Beep!");
        } else {
            numArray.push(i);
        }
    }
    return numArray
}

//User Interface
$(document).ready(function() {
    $("form#number-form").submit(function(event) {
        event.preventDefault();



    });

});