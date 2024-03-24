document.querySelector('.nav-icon').addEventListener('click', function () {
    document.querySelector('.side-bar').classList.toggle('show')
});
document.querySelector('.close-icon').addEventListener('click', function () {
    document.querySelector('.side-bar').classList.remove('show')
});