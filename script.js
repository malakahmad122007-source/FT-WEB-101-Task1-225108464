

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "Light Mode";

    } else {

        themeButton.textContent = "Dark Mode";

    }

});
