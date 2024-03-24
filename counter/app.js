let counter = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
console.log(btns);


btns.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            counter--;
        } else if (styles.contains('increase')) {
            counter++;
        } else {
            counter = 0;
        }
        value.textContent = counter;

        if (counter < 0) {
            value.style.color = 'red';
        } else if (counter > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = 'blue';
        }

    });

});























// btn.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const style = e.currentTarget.classlist;

//         if (style.contains('decrease')) {
//             counter--;
//         } else if (style.contains('increase')) {
//             counter++;
//         } else {
//             counter = 0;
//         }



//     });
// });

// btn.array.forEach(btn => {
//     btn.addEventListener('click', function (e) {
//         const style = e.currentTarget.classlist;

//         if (style.contains('decrease')) {
//             counter--;
//         } else if (style.contains('increase')) {
//             counter++;
//         } else {
//             counter = 0;
//         }



//     });
// });