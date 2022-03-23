const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex)
    image.style.backgroundImage = images[randomIndex];
    image.src = "images/img1.jpeg";
    image.src = "images/img2.jpeg"; 
    image.src = "images/img3.jpeg"; 
    image.src = "images/img4.jpeg";
}