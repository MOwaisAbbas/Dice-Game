var userInput = prompt("Enter Your Name");
var printName = document.querySelectorAll("p")[0];
var plyerName = printName.innerHTML;
printName.innerHTML = userInput;






var msg = document.querySelectorAll(".msg")[0];
console.log(msg);
var dice = document.querySelectorAll('.dice');
var attempt = document.querySelectorAll("#attempt")[0];
var win = document.querySelectorAll("#win")[0];



var image = document.querySelectorAll('button');
function diceRoll(userPick) {
    console.log(image)

    if (userPick === 1) {
        image[0].style.border = "5px solid #000000";
        image[1].style.border = "5px solid transparent";
        image[2].style.border = "5px solid transparent";
        image[3].style.border = "5px solid transparent";
        image[4].style.border = "5px solid transparent";
        image[5].style.border = "5px solid transparent";

    }
    if (userPick === 2) {
        image[0].style.border = "5px solid transparent";
        image[1].style.border = "5px solid #000000";
        image[2].style.border = "5px solid transparent";
        image[3].style.border = "5px solid transparent";
        image[4].style.border = "5px solid transparent";
        image[5].style.border = "5px solid transparent";

    }
    if (userPick === 3) {
        image[0].style.border = "5px solid transparent";
        image[1].style.border = "5px solid transparent";
        image[2].style.border = "5px solid #000000";
        image[3].style.border = "5px solid transparent";
        image[4].style.border = "5px solid transparent";
        image[5].style.border = "5px solid transparent";
    }
    if (userPick === 4) {
        image[0].style.border = "5px solid transparent";
        image[1].style.border = "5px solid transparent";
        image[2].style.border = "5px solid transparent";
        image[3].style.border = "5px solid #000000";
        image[4].style.border = "5px solid transparent";
        image[5].style.border = "5px solid transparent";
    }
    if (userPick === 5) {
        image[0].style.border = "5px solid transparent";
        image[1].style.border = "5px solid transparent";
        image[2].style.border = "5px solid transparent";
        image[3].style.border = "5px solid transparent";
        image[4].style.border = "5px solid #000000";
        image[5].style.border = "5px solid transparent";
    }
    if (userPick === 6) {
        image[0].style.border = "5px solid transparent";
        image[1].style.border = "5px solid transparent";
        image[2].style.border = "5px solid transparent";
        image[3].style.border = "5px solid transparent";
        image[4].style.border = "5px solid transparent";
        image[5].style.border = "5px solid #000000";
    }



    var ranNum = Math.ceil(Math.random() * 6);
    if (ranNum === 1) {
        dice[0].style.display = "flex";
        dice[1].style.display = "none";
        dice[2].style.display = "none";
        dice[3].style.display = "none";
        dice[4].style.display = "none";
        dice[5].style.display = "none";

    }
    else if (ranNum === 2) {
        dice[0].style.display = "none";
        dice[1].style.display = "flex";
        dice[2].style.display = "none";
        dice[3].style.display = "none";
        dice[4].style.display = "none";
        dice[5].style.display = "none";
    }
    else if (ranNum === 3) {
        dice[0].style.display = "none";
        dice[1].style.display = "none";
        dice[2].style.display = "flex";
        dice[3].style.display = "none";
        dice[4].style.display = "none";
        dice[5].style.display = "none";
    }
    else if (ranNum === 4) {
        dice[0].style.display = "none";
        dice[1].style.display = "none";
        dice[2].style.display = "none";
        dice[3].style.display = "flex";
        dice[4].style.display = "none";
        dice[5].style.display = "none";
    }
    else if (ranNum === 5) {
        dice[0].style.display = "none";
        dice[1].style.display = "none";
        dice[2].style.display = "none";
        dice[3].style.display = "none";
        dice[4].style.display = "flex";
        dice[5].style.display = "none";
    }
    else if (ranNum === 6) {
        dice[0].style.display = "none";
        dice[1].style.display = "none";
        dice[2].style.display = "none";
        dice[3].style.display = "none";
        dice[4].style.display = "none";
        dice[5].style.display = "flex";
    }
    var count = attempt.innerHTML;
    ++count;
    document.querySelectorAll("#attempt")[0].innerHTML = count;
    if (userPick === ranNum) {
        var value = win.innerHTML;
        ++value;
        document.querySelectorAll("#win")[0].innerHTML = value;
        msg.innerHTML = "You WIN !"

        msg.style.color = "#000000";

    }
    else {
        msg.innerHTML = "You lose, Try again"
        msg.style.color = "#00000077";
    }
    var num1 = count;
    var num2 = document.querySelectorAll("#win")[0].innerHTML;
    var ratio = document.querySelectorAll("#ratio")[0];
    var calculate = ratio.innerHTML;
    calculate = Math.round(num2 / num1 * 100);
    document.querySelectorAll("#ratio")[0].innerHTML = calculate + "%";
    

};




