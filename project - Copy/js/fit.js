window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
// 
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}
// 
function bb(){
    var w=document.forms["bodymass"] ["w"]. value;
    var h=document.forms["bodymass"] ["h"]. value;

    var ww=parseInt(w);
    var hh=parseInt(h);

    var m=((hh/100) * 2);
    var result =(ww/m);

    alert ("BMI: "+result.toFixed(1));
}
// 
const galleryItem =document.getElementsByClassName("gallery-item");

// create elememt for lightbox
const lightBoxContainer = document.createElement("div");
// forbasic area
const lightBoxContent = document.createElement("div");
// for images
const lightBoxImg = document.createElement("img");
// for prev button to change images
const lightBoxPrev = document.createElement("div");
// for next button
const lightBoxNext = document.createElement("div");


// create classlist

lightBoxContainer.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxPrev.classList.add("fa","fa-angle-left","lightbox-prev");
lightBoxNext.classList.add("fa","fa-angle-right","lightbox-next");
lightBoxContainer.classList.add('lightbox');

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if(n < 1) {
        index = galleryItem.length;
    }

    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage(){
    lightBoxContainer.style.display="block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}

for (let i = 0; i<galleryItem.length; i++){
    galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n){
    showLightBox(index += n);
}

function prevImage(){
    sliderImage(-1);
}
function nextImage(){
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox(){
    if(this === event.target){
        lightBoxContainer.style.display = "none";
    }
}

lightBoxContainer.addEventListener("click", closeLightBox);





