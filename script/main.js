// We need to add the placeholder image for every image as the background of it's container .blur-load automatically using the child img name.

// We need to make sure the img appears only after it's fully loaded, and before that it stays hidden and the placeholder background stays shown.
// selecting all the different blur divs that we have
const blurDivs = document.querySelectorAll(".blur-load");

blurDivs.forEach(div => {

    const img = div.querySelector("img");
    
    // Function work when the image is fully loaded
    function loaded() {

        // Show image
        div.classList.add("loaded");

    }

    if(img.complete) {
        loaded();
    } else {
        img.addEventListener("load", loaded);
    }

});