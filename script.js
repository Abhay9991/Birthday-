window.onload = function () {

  const countdownScreen = document.getElementById("countdownScreen");
  const countdownImage = document.getElementById("countdownImage");
  const countdownText = document.getElementById("countdownText");

  const birthdayReveal = document.getElementById("birthdayReveal");
  const mainWebsite = document.getElementById("mainWebsite");

  const images = [
    "cat5.jpg",
    "cat4.jpg",
    "cat3.jpg",
    "cat2.jpg",
    "cat1.jpg"
  ];

  let current = 0;
  let count = 5;

  countdownText.textContent = "I'm gonna surprise you in 5";

  const timer = setInterval(function () {

    count--;

    if (count > 0) {
      current++;
      countdownImage.src = images[current];
      countdownText.textContent =
        "I'm gonna surprise you in " + count;
    } else {

      clearInterval(timer);

      countdownText.textContent =
        "💫 HAPPY HAPPY HAPPY 🐥";

      setTimeout(function () {

        countdownScreen.style.display = "none";

        birthdayReveal.style.display = "block";

        setTimeout(function () {

          birthdayReveal.style.display = "none";

          mainWebsite.style.display = "block";

          alert(
            "⚠️ SYSTEM MESSAGE ⚠️\n\nA Wild Butki Has Appeared In The World                     Special abilities -               1.🙂‍↕️can do anything but do nothing                           2.😭cry after hendling every situation                         3.🦄look cute but who knows ...."
            
          );

        }, 7000);

      }, 1000);

    }

  }, 1000);

};

function openGift() {
  document
    .getElementById("giftSection")
    .classList.remove("hidden");
}

function playMusic() {
  document.getElementById("music").play();
}

function showGallery() {
  document
    .getElementById("gallery")
    .classList.remove("hidden");
}

function unlockSecret() {

  let code = prompt("Enter the secret code:");

  if (code === "BHINDI") {

    document
      .getElementById("secret")
      .classList.remove("hidden");

  } else {

    alert("Wrong code");

  }
}

function sendWish(){

let wish =
document.getElementById("wishInput").value;

if(wish.trim() === ""){

alert("🌟 First make a wish!");
return;

}

document.getElementById("wishResult").innerHTML =

`✨ Wish Received ✨

<br><br>

Dear Priyanka❣️,

<br><br>

Your wish:

<br>

"${wish}"

<br><br>

has been safely delivered to the Universe 🌙

<br><br>

Processing...

<br><br>

⭐⭐⭐⭐⭐

<br><br>

I cannot guarantee when it will arrive,

but I have informed all stars of every universe and fairies about it.

It may take some time to respond.

They are busy right now but trying their best to complete your wish. 🎂🐱🌸`;

}

function showFinalMessage() {

  document
    .getElementById("finalMessage")
    .classList.remove("hidden");

}
function launchConfetti(){

    for(let i = 0; i < 100; i++){

        let flower =
        document.createElement("div");

        flower.innerHTML = "🌼";

        flower.style.position = "fixed";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.top = "-20px";
        flower.style.fontSize =
        (20 + Math.random() * 20) + "px";

        flower.style.zIndex = "99999";

        document.body.appendChild(flower);

        let pos = -20;

        let fall = setInterval(function(){

            pos += 5;

            flower.style.top =
            pos + "px";

        },20);

        setTimeout(function(){

            clearInterval(fall);
            flower.remove();

        },4000);

    }

}
setInterval(() => {

    let flower =
    document.createElement("div");

    const flowers = [
"🌸",
"🍬",
"🍫",
"💮",
"🌼",
"💖",
"💐"
];

flower.innerHTML =
flowers[
Math.floor(
Math.random()*flowers.length
)
];;

    flower.classList.add("flower");

    flower.style.left =
    Math.random()*100 + "vw";

    flower.style.fontSize =
    (15 + Math.random()*25) + "px";

    flower.style.animationDuration =
    (5 + Math.random()*5) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    },10000);

},300);