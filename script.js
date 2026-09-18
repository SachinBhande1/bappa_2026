/* ==========================================
   INTRO SCREEN
========================================== */

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


enterBtn.addEventListener("click", function () {

    intro.classList.add("hide");

    // Try to start music
    music.play()
        .then(() => {
            musicBtn.innerHTML = "🔊";
        })
        .catch(() => {
            musicBtn.innerHTML = "🔇";
        });

});


/* ==========================================
   MUSIC BUTTON
========================================== */

musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");


menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


/* Close mobile menu after clicking link */

document.querySelectorAll("nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


/* ==========================================
   COUNTDOWN
========================================== */

/*
   CHANGE THIS DATE

   Example:
   September 1, 2026 at 10:00 AM

*/

const ganpatiArrival = new Date(
    "September 14, 2026 10:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = ganpatiArrival - now;


    if (difference <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference %
            (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (difference %
            (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (difference %
            (1000 * 60))
        /
        1000
    );


    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ==========================================
   GALLERY IMAGE CLICK
========================================== */

const galleryImages =
    document.querySelectorAll(".gallery-item img");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        window.open(
            image.src,
            "_blank"
        );

    });

});

function shareWhatsApp() {

    // तुमची ONLINE website link इथे टाका
    const websiteLink =
        "https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/";

    const message =
`🙏 ॥ श्री गणेशाय नमः ॥ 🙏

🪔 सार्वजनिक गणेशोत्सव मंडळ
📍 रामनगर, नागपूर

गणपती बाप्पांच्या मंगलमय
आगमनासाठी आपणास व आपल्या
परिवारास मनःपूर्वक आमंत्रण! ❤️

🙏 बाप्पांचे दर्शन व संपूर्ण कार्यक्रम पाहण्यासाठी खालील लिंकवर क्लिक करा:

🌐 ${websiteLink}

आपली उपस्थिती आम्हाला आनंद देईल. ❤️

🙏 गणपती बाप्पा मोरया! 🙏`;

    const whatsappURL =
        "https://wa.me/?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}