function activateGallery() {  
    let smallImages = document.querySelectorAll("#gallery-thumbs > div > img");
    smallImages.forEach(x => {
        x.addEventListener("click", function(){
            let mainImage = document.querySelector("#gallery-photo > img");
            let titleDesc = document.querySelector("#gallery-info > .title");
            let desc = document.querySelector("#gallery-info > .description");
            mainImage.setAttribute("src", x.dataset.largeVersion);
            mainImage.setAttribute("alt", x.alt);
            document.querySelector(".current").classList.remove("current");
            x.parentNode.classList.add("current");
            titleDesc.innerHTML = x.dataset.title;
            desc.innerHTML = x.dataset.description;
            //freaking typos
            //console.log(desc.innerHTML);
            //console.log(x.dataset.description);
        });
    });
    
}
