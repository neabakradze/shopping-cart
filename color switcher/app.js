const colors = ["green", "red", "rgba(133,22,200)"];

const btn = document.querySelector('.btn');
const color = document.querySelector(".color");

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    console.log(getRandomNumber());
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

document.querySelector('.simple').addEventListener('click', function () {

    btn.addEventListener('click', function () {
        const randomNumber = getRandomNumber();
        console.log(getRandomNumber());
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    });
});