"use strict";
const modal = document.querySelector(".modal1");
const preview = document.querySelector(".gallery img");
const original = document.querySelector(".full-img1");
const caption = document.querySelector(".caption1");


preview.forEach(preview => { 
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        //Dyanamic image and text
        const originalSrc = preview.getAttribute("data-original");
        original.Src = originalSrc
        const altText = preview.alt;
        caption.textContent = altText;
    })
})


modal.addEventListener('click', (e) => { 
    if (e.target.classList.contains("model1")) { 
        modal.classList.remove('open');
        original.classList.remove('open');

    }
})