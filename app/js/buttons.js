const bookmark = document.querySelector('.bookmark');
const root = document.documentElement;
const circle = document.querySelector('circle');
const path = document.querySelector('path');

function addBookmark(){
    if(this.getAttribute('data-flag') == 'false'){
        circle.setAttribute('fill','hsl(176, 72%, 28%)');
        path.setAttribute('fill','#FFFFFF');
        this.setAttribute('data-flag','true');
        root.style.setProperty('--content_bookmark',"'Bookmarked'");
        root.style.setProperty('--color_bookmark','hsl(176, 72%, 28%)');
        root.style.setProperty('--bg_content_bookmark','#F4F8F9');
        root.style.setProperty('--width_before','11.875rem');
        root.style.setProperty('--margin_rightbookmark','8.375rem');
    }else{
        circle.setAttribute('fill','#2F2F2F');
        path.setAttribute('fill','#B1B1B1');
        this.setAttribute('data-flag','false');
        root.style.setProperty('--content_bookmark',"'Bookmark'");
        root.style.setProperty('--color_bookmark','hsl(0, 0%, 48%)');
        root.style.setProperty('--bg_content_bookmark','#F4F4F4');
        root.style.setProperty('--width_before','10.875rem');
        root.style.setProperty('--margin_rightbookmark','7.375rem');
    }
}

bookmark.addEventListener('click',addBookmark);