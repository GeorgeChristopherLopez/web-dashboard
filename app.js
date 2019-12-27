let on1 = document.querySelector(".on1");
let on2 = document.querySelector(".on2");
let off1 = document.querySelector(".off1");
let off2 = document.querySelector(".off2");


on1.addEventListener("click", function () {
    on1.classList.toggle('hide-btn')
    on1.classList.toggle('show-btn');
    off1.classList.toggle('hide-btn')
    off1.classList.toggle('show-btn');

});

off1.addEventListener("click", function () {
    on1.classList.toggle('hide-btn')
    on1.classList.toggle('show-btn');
    off1.classList.toggle('hide-btn');
    off1.classList.toggle('show-btn');

});

on2.addEventListener("click", function () {
    on2.classList.toggle('hide-btn')
    on2.classList.toggle('show-btn');
    off2.classList.toggle('hide-btn');
    off2.classList.toggle('show-btn');

});

off2.addEventListener("click", function () {
    off2.classList.toggle('hide-btn')
    off2.classList.toggle('show-btn');
    on2.classList.toggle('hide-btn');
    on2.classList.toggle('show-btn');

});


let icon1 = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
let icon3 = document.querySelector('.icon3');
let icon4 = document.querySelector('.icon4');

icon1.addEventListener("click", function () {
    icon1.classList.add('highlight');
    icon2.classList.remove('highlight');
    icon3.classList.remove('highlight');
    icon4.classList.remove('highlight');
});

icon2.addEventListener("click", function () {
    icon2.classList.add('highlight');
    icon1.classList.remove('highlight');
    icon3.classList.remove('highlight');
    icon4.classList.remove('highlight');
});

icon3.addEventListener("click", function () {
    icon3.classList.add('highlight');
    icon2.classList.remove('highlight');
    icon1.classList.remove('highlight');
    icon4.classList.remove('highlight');
});

icon4.addEventListener("click", function () {
    icon4.classList.add('highlight');
    icon2.classList.remove('highlight');
    icon3.classList.remove('highlight');
    icon1.classList.remove('highlight');
});
