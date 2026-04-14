let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function openModal(src) {
    document.getElementById("modal").style.display = "flex";

    images.forEach((img, index) => {
        if (img.src === src) {
            currentIndex = index;
        }
    });

    document.getElementById("modalImg").src = src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("modalImg").src = images[currentIndex].src;
}
document.addEventListener("keydown", function(e) {
    if (document.getElementById("modal").style.display === "flex") {
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "ArrowLeft") changeImage(-1);
        if (e.key === "Escape") closeModal();
    }
});
function filterImages(category) {
    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}