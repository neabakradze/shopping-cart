const reviews = [
    {
        id: 1,
        name: 'sarah jonson',
        job: 'UX designer',
        img: "https://api.time.com/wp-content/uploads/2019/11/sally-rooney-time-100-next.jpg?w=720&quality=85",
        text: 'sarah Lorem ipsum dolor sit amet consectetur adipisicing el',
    },
    {
        id: 1,
        name: 'maia burjering',
        job: 'web developer',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGO4vZ5t9nUQwVrUNh-i-_XDpF6YTJLwQf4A&usqp=CAU",
        text: 'sarah Lorem ipsum dolor sit amet consectetur adipisicing el',
    },
];

/////////select items//////////
const img = document.getElementById('persons-img2');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const supriseBtn = document.querySelector('.suprise-btn');

//set starting item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener('click', function () {
    currentItem++;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});


supriseBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
});

