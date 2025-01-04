// document.addEventListener("DOMContentLoaded", function () {

//     const images = [
//         'galeri foto kita/pantai.jpg',
//         'galeri foto kita/pantai1.jpg',
//         'galeri foto kita/nonton3.jpg',
//         'galeri foto kita/pantai3.jpg',
//         'galeri foto kita/nonton2.jpg',
//         'galeri foto kita/nonton.jpg'
//     ];

//     let currentImageIndex = 0;

//     document.getElementsByClassName("trigger").onclick = function () {
//         document.getElementById("popup").style.display = "block";
//         document.getElementById("img-conten").src = images[currentImageIndex];
//     }
    
//     document.getElementById("exit").onclick = function() {
//         document.getElementById("popup").style.display = "none";
//     }
    
//     document.getElementById("prev").onclick = function() {
//         currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
//         document.getElementById("img-conten").src = images[currentImageIndex];
//     }

//     document.getElementById("next").onclick = function() {
//         currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
//         document.getElementById("img-conten").src = images[currentImageIndex];
//     }

//     window.onclick = function(event) {
//         const popup = document.getElementById("popup") ;
//         if (event.target === popup) {
//             popup.style.display = "none";
//         }
//     }
// })

const images = [
    'galeri foto kita/pantai.jpg',
    'galeri foto kita/pantai1.jpg',
    'galeri foto kita/nonton3.jpg',
    'galeri foto kita/pantai3.jpg',
    'galeri foto kita/nonton2.jpg',
    'galeri foto kita/nonton.jpg'
];

let currentIndex = 0;

document.getElementById("giftImage").onclick = function() {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImg").src = images[currentIndex];
}

document.getElementById("closePopup").onclick = function() {
    document.getElementById("popup").style.display = 'none';
}

document.getElementById('prev').onclick = function() {
    currentIndex = (currentIndex > 0 ) ? currentIndex - 1 : images.length - 1;
    document.getElementById('popup').src = images[currentIndex];
}

document.getElementById('next').onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex +1 :0;
    document.getElementById('popup').src = images[currentIndex];
}

document.getElementById('close').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}

window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}