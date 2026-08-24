// =====================================================
// DIGITAL RAKHI EXPERIENCE
// HOME → SELECT BROTHER → AR CAMERA
// =====================================================

console.log("🎀 Digital Rakhi started");


// =====================================================
// GET ELEMENTS
// =====================================================

const homePage = document.getElementById("homePage");
const openButton = document.getElementById("openButton");
const brothersPage = document.getElementById("brothersPage");

const brotherButtons =
    document.querySelectorAll(".brother-button");


// =====================================================
// BROTHER DATA
// =====================================================

const brothers = {

    "Aadi": true,
    "Aryan": true,
    "Ashish": true,
    "Manish Bhaiya": true,
    "Sandip Bhaiya": true,
    "Prince Bhaiya": true,
    "Mandip Bhaiya": true

};


// =====================================================
// OPEN YOUR RAKHI
// =====================================================

if (openButton) {

    openButton.addEventListener("click", function () {

        console.log("❤️ OPEN YOUR RAKHI clicked");


        // Hide HOME page

        if (homePage) {
            homePage.style.display = "none";
        }


        // Show BROTHER selection

        if (brothersPage) {

            brothersPage.style.display = "flex";

            brothersPage.classList.add("show");

        }


        console.log("✅ Brother selection is now visible");

    });

} else {

    console.error(
        "❌ openButton not found"
    );

}


// =====================================================
// SELECT BROTHER
// =====================================================

brotherButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const name =
            button.getAttribute("data-name");


        console.log(
            "🎀 Selected brother:",
            name
        );


        if (!brothers[name]) {

            console.error(
                "Brother not found:",
                name
            );

            return;

        }


        // Save selected brother

        localStorage.setItem(
            "selectedBrother",
            name
        );


        console.log(
            "✅ Saved selectedBrother:",
            localStorage.getItem(
                "selectedBrother"
            )
        );


        // Open AR camera

        window.location.href =
            "ar.html?brother=" +
            encodeURIComponent(name);

    });

});


// =====================================================
// DEBUG
// =====================================================

console.log(
    "Open button:",
    openButton
);

console.log(
    "Home page:",
    homePage
);

console.log(
    "Brothers page:",
    brothersPage
);

console.log(
    "Brother buttons:",
    brotherButtons.length
);
