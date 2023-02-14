const btn = document.getElementById("next-btn");
const images = document.getElementsByClassName("image");
let currentImageIndex = 0;

const nextImage = () => {
    images[currentImageIndex].style.visibility = "hidden";
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.visibility = "visible";
};

const randomZoomImage = () => {
    const viewport = document.getElementById("viewport");
    const viewportWidth = viewport.clientWidth;
    const viewportHeight = viewport.clientHeight;
    const image = images[currentImageIndex];
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);
    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = "scale(5)";
};

const grayscale = () => {
    images[currentImageIndex].style.filter = "grayscale(0%)";
}