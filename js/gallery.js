function activateGallery() {  
    let smallImages = document.querySelectorAll("#gallery-thumbs > div > img");
    smallImages.forEach(x => {
        let newImageSrc = x.dataset.largeVersion;
        let largePics = new Image();
        largePics.src = newImageSrc;
        let mainImage = document.querySelector("#gallery-photo > img");
        
        x.addEventListener("click", function(){
            let titleDesc = document.querySelector("#gallery-info > .title");
            let desc = document.querySelector("#gallery-info > .description");
            mainImage.setAttribute("src", newImageSrc);
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
