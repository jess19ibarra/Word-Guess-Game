//cartoon list 
var cartoons = ["ARTHUR", "CATDOG", "DOUG", "ED EDD N EDDY", "HEY ARNOLD", "POWERPUFF GIRLS", "ROCKET POWER", "RUGRATS"];

var ltrsGuessed = [];
var remainingGuesses = 0;
var maxGuesses = [10];
var guessedArr = [];
var numbWins = [0];
var numbLosses = [0];
var playword;[0]
var finishedGame = false;

function setup() {
    playword = cartoons[Math.floor(Math.random() * cartoons.length)];
    guessedArr = [];

    for (var i = 0; i < playword.length; i++) {
        guessedArr[i] = "_";
    }

    remainingGuesses = maxGuesses;
    ltrsGuessed = [];

    document.getElementById("numbGuesses").style.color = "";

    updateScreen();
};

function updateScreen() {
    document.getElementById("numbWins").innerText = numbWins;
    document.getElementById("numbLosses").innerText = numbLosses;
    document.getElementById("numbGuesses").innerText = remainingGuesses;
    document.getElementById("answer").innerText = guessedArr.join("");
    document.getElementById("ltrsGuessed").innerText = ltrsGuessed;

};

function check(letter) {

    if (ltrsGuessed.indexOf(letter) === -1) {
        ltrsGuessed.push(letter);

        if (playword.indexOf(letter) === -1) {
            remainingGuesses--;

            if (remainingGuesses <= 3) {
                document.getElementById("numbGuesses").style.color = "#e12d2e";
            }

        } else {
            for (var i = 0; i < playword.length; i++) {
                if (letter === playword[i]) {
                    guessedArr[i] = letter;
                }
            }
        }
    }

};


function isWinner() {

    if (guessedArr.indexOf("_") === -1) {
        numbWins++;
        finishedGame = true;
        if (playword === "ARTHUR") {
            document.createElement("imgage");
            image.setAttribute("src", "https://yt3.ggpht.com/a/AGF-l78gKhVuYTbECV62pahaCW8DxI8PFiQhialzBg=s900-c-k-c0xffffffff-no-rj-mo");
        } else if (playword === "CATDOG") {
            document.getElementById("image").src = "http://www.toonfind.com/cartoon-images/cartoon-pictures-big/205-4.jpg";
        } else if (playword === "DOUG") {
            document.getElementById("image").src = "https://ib2.hulu.com/user/v3/artwork/248d614e-04eb-487d-b1d9-8a3c529c355a?base_image_bucket_name=image_manager&base_image=9f057e80-a174-4bba-90d9-f2c34e3fb77f&size=400x600&format=jpeg";
        } else if (playword === "ED EDD N EDDY") {
            document.getElementById("image").src = "https://is2-ssl.mzstatic.com/image/thumb/Video/2f/b1/68/mzl.vuhtixam.jpg/268x0w.jpg";
        } else if (playword === "HEY ARNOLD") {
            document.getElementById("image").src = "https://ib.hulu.com/user/v3/artwork/a4a06e0c-c4d8-4b34-a55e-a28c57ecc429?base_image_bucket_name=image_manager&base_image=b8f52699-81b5-417b-9c5f-8f7f63528c33&size=400x600&format=jpeg";
        } else if (playword === "POWERPUFF GIRLS") {
            document.getElementById("image").src = "https://ib.hulu.com/user/v3/artwork/99bf7a88-78a7-478a-abea-db87ecffafdd?base_image_bucket_name=image_manager&base_image=138a4dc9-3020-4a39-b143-441833f764bc&size=400x600&format=jpeg";
        } else if (playword === "ROCKET POWER") {
            document.getElementById("image").src = "https://pbs.twimg.com/media/CKJZfNyVEAACpPn.jpg";
        } else if (playword === "RUGRATS") {
            document.getElementById("image").src = "https://cdn.onebauer.media/one/lifestyle-legacy/66/fc514/5cb2c/32e0b/c5499/10f8f/dfd14/rugrats-quiz_646x363.jpg?quality=80&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg";
        }

    }
}

function isLoser() {
    if (remainingGuesses <= 0) {
        numbLosses++;
        finishedGame = true;
        document.getElementById("image").src = "https://i.ytimg.com/vi/4-Octi0nv50/maxresdefault.jpg";
        document.getElementById("numbLosses").style.color = "#e12d2e";
    }

}

document.onkeyup = function (event) {
    if (finishedGame) {
        setup();
        finishedGame = false;
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            check(event.key.toUpperCase());
            updateScreen();
            isWinner(playword);
            isLoser(remainingGuesses);
        }
    }
};

setup();
updateScreen();

console.log(playword);
