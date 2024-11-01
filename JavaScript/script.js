const videoModal = document.getElementById("videoModal");
const videoBtn = document.getElementById("trailer");
const closeBtn = document.getElementById("closeBtn");

videoBtn.addEventListener("click", () => {
  videoModal.style.display = "block";

  videoModal.addEventListener("click", () => {
    videoModal.style.display = "none";
  });
});

closeBtn.addEventListener("click", () => {
  videoModal.style.display = "none";
});



