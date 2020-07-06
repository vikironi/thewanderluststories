
const modal1 = document.querySelector(".modal1");
const preview = document.querySelector(".gallery img");
const original = document.querySelector(".full-img1");
const caption1 = document.querySelector(".caption1");


preview.forEach((preview) => { 
    preview.addEventListener("click", () => {
        modal1.classList.add("open");
        original.classList.add("open");
        //Dyanamic image and text
        const originalSrc = preview.getAttribute("data-original");
        console.log(originalSrc);
        original.src = originalSrc; 
        const altText = preview.alt;
        caption1.textContent = altText;
    })
})


modal1.addEventListener('click', (e) => { 
    if (e.target.classList.contains("model1")) { 
        modal1.classList.remove('open');
        original.classList.remove('open');

    }
})