document.querySelectorAll(".popup-image").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    const imgSrc = this.getAttribute("href");
    const img = document.getElementById("popupImg");

    img.src = imgSrc;
    document.getElementById("imagePopup").style.display = "flex";
  });
});

// Close popup
document.querySelector(".close-popup").addEventListener("click", () => {
  document.getElementById("imagePopup").style.display = "none";
});

// Outside click close
document.getElementById("imagePopup").addEventListener("click", (e) => {
  if (e.target.id === "imagePopup") {
    document.getElementById("imagePopup").style.display = "none";
  }
});
