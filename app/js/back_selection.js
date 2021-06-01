const button = document.querySelector('.buttons .green');
const back_select = document.querySelector('.back__selection');
const close_back = document.querySelector('.back__selection .top .img');
const header = document.querySelector('header');
const sec_1 = document.querySelector('.section__1');
const overlay_back = document.querySelector('.overlay2');
const last_back_option = document.querySelector('.section__3 .options:last-child');

function reveal(){
    // back_select.classList.add('animate_atags_f');
    // overlay_back.classList.add('animate_overlay_f');
    header.style.zIndex = '0';
    back_select.style.visibility = 'visible';
    sec_1.style.border = 'none';
    overlay_back.style.visibility = 'visible';
    last_back_option.style.opacity = '1';
}

function close(){
    sec_1.style.border = '1px solid rgb(243, 243, 243)';
    back_select.style.visibility = 'hidden';
    overlay_back.style.visibility = 'hidden';
    header.style.zIndex = '1';
    last_back_option.style.opacity = '.6';
    radio_options.forEach((option) =>{
        option.children[0].children[1].removeAttribute('style');
        option.removeAttribute('style');
        try {
          const hidden = option.children[3];
          hidden.removeAttribute("style");
        } catch (error) {}
    })
}

button.addEventListener('click',reveal);
close_back.addEventListener('click', close);