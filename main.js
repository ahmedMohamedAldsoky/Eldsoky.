let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let eldsoky = document.querySelector('.eldsoky');
window.onscroll = function(){
    let value  = scrollY;
    stars.style.left = value + 'px';
    moon.style.top  = value * 4 + 'px';
    mountains3.style.top  = value * 2+ 'px';
    mountains4.style.top  = value * 1.5+ 'px';
    river.style.top  = value + 'px';
    boat.style.left  = value * 3 + 'px';
    eldsoky.style.fontSize  = value  + 'px';
    if(scrollY >= 74){
        eldsoky.style.fontSize  = 74  + 'px';
        eldsoky.style.position  = 'fixed';
        if(scrollY >= 475){
            eldsoky.style.display  = 'none';
        }else{
            eldsoky.style.display  = 'block';
        }
        if(scrollY >= 95){
            document.querySelector('.main').style.background = 'linear-gradient(#2b608d,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'

        }
    }
}