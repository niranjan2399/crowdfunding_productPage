const button = document.querySelector('.buttons .green');
const back_select = document.querySelector('.back__selection');
const close_back = document.querySelector('.back__selection .top .img');
const header = document.querySelector('header');
const sec_1 = document.querySelector('.section__1');

function reveal(){
    back_select.style.visibility = 'visible';
    sec_1.style.border = 'none';
    overlay.style.background = 'rgba(0, 0, 0, 0.658)';
    overlay.style.height = `${body.scrollHeight}`;
    console.log(overlay.style);
    overlay.style.visibility = 'visible';
    header.style.zIndex = '0';
    console.log(overlay);
}

function close(){
    sec_1.style.border = '1px solid rgb(243, 243, 243)';
    overlay.style.background = 'linear-gradient(rgba(0, 0, 0, 0.658),transparent)';
    back_select.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
    header.style.zIndex = '1';
    console.log(this);
}

button.addEventListener('click',reveal);
close_back.addEventListener('click', close);