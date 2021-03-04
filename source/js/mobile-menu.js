let 
    modal_menu = document.querySelector('header.mobile__navbar'),
    menuBtn = document.querySelector('img.menu'),
    closeBtn = document.querySelector('img.close')


menuBtn.addEventListener('click', function(){
    modal_menu.style.display = 'flex'
})
closeBtn.addEventListener('click', function(){
    modal_menu.style.display = 'none'
})