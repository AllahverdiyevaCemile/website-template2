
// Counter

let btn = document.querySelectorAll(".btn");
let count = 0;

const counter = document.querySelector(".counter-number");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const cont = e.currentTarget.classList;
        if (cont.contains("btn-dec")) {
            count--;
        }
        else if (cont.contains("btn-inc")) {
            count++;
        }
        else {
            count = 0;
        }

        if (count > 0) {
            counter.style.color = "green";
        }

        if (count < 0) {
            counter.style.color = "red";
        }

        if (count === 0) {
            counter.style.color = "#000";
        }
        counter.textContent = count;
    });
});