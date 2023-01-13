(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');
    const menuLinks = document.querySelectorAll('.nav_link a[href^="#"]');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show')
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });

    menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function() {
        menu.classList.remove('nav_link--show');
        })
    });

})();
