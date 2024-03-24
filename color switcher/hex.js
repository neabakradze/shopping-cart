const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function GetRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

document.querySelector('.hex').addEventListener('click', function () {
    document.body.style.backgroundColor = "white";
    btn.addEventListener('click', function () {
        let hexColors = "#";
        for (let i = 0; i < 6; i++) {
            hexColors += hex[GetRandomNumber()];
        }
        document.body.style.backgroundColor = hexColors;
        color.textContent = hexColors;
    });
});


