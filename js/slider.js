(function(){
    const sliders = [...document.querySelectorAll('.gallery_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1)
    });

    const changePosition = (add)=>{
        const currentGallery = document.querySelector('.gallery_body--show').dataset.id;
        value = Number(currentGallery);
        value+= add;

        sliders[Number(currentGallery)-1 ].classList.remove('gallery_body--show')
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('gallery_body--show');
    }
})();