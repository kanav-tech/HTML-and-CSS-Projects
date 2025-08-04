document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  // Select all thumbnails with data-large attribute
  const thumbnails = document.querySelectorAll(".lightbox-thumb");

  thumbnails.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      const largeSrc = thumb.getAttribute("data-large");
      lightboxImg.src = largeSrc;
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
    lightboxImg.src = ""; // Reset
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });
});
