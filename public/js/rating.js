document.addEventListener("DOMContentLoaded", function () {
  const allStar = document.querySelectorAll(".rating .star");
  const ratingInput = document.querySelector(".rating input[type='range']");
  let userRated = false;
  let waveInterval;

  // Highlight saved rating if exists
  if (ratingInput.value) {
    highlightStars(ratingInput.value - 1);
  }

  allStar.forEach((star, idx) => {
    star.addEventListener("click", function () {
      ratingInput.value = idx + 1;
      highlightStars(idx);
      userRated = true;

      // Stop animation after user rates
      if (waveInterval) clearInterval(waveInterval);

      // Optional: add celebration if 5-star
      if (idx === 4) celebrate();
    });

    star.addEventListener("mouseover", function () {
      if (!ratingInput.value) return;
      highlightStars(idx, true);
    });

    star.addEventListener("mouseout", function () {
      if (!ratingInput.value) return;
      highlightStars(ratingInput.value - 1);
    });
  });

  function highlightStars(upToIndex, isHover = false) {
    allStar.forEach((star, i) => {
      star.classList.remove("bxs-star", "bx-star", "active", "selected");

      if (i <= upToIndex) {
        star.classList.add("bxs-star", "selected");
        if (!isHover) star.classList.add("active");
      } else {
        star.classList.add("bx-star");
      }
    });
  }

  function celebrate() {
    const ratingDiv = document.querySelector(".rating");
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    let confettiHTML = "";
    for (let i = 0; i < 24; i++) {
      confettiHTML += `<div class="confetti-piece" style="
          left: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 0.5}s;
          animation-duration: ${2 + Math.random() * 2}s;
          background-color: hsl(${Math.random() * 360}, 100%, 50%);
          ${i % 4 === 0 ? "box-shadow: 0 0 8px white;" : ""}
        "></div>`;
    }

    confetti.innerHTML = confettiHTML;
    ratingDiv.appendChild(confetti);

    const stars = document.querySelectorAll(".rating .bxs-star");
    stars.forEach((star) => {
      star.style.animation = "starBounce 0.5s 3 alternate";
    });

    setTimeout(() => {
      confetti.remove();
      stars.forEach((star) => {
        star.style.animation = "";
      });
    }, 3000);
  }

  function animateStarsLeftToRight() {
    if (userRated) return; // Stop if user already rated
    allStar.forEach((star, index) => {
      setTimeout(() => {
        star.classList.add("wave");
        setTimeout(() => {
          star.classList.remove("wave");
        }, 800);
      }, index * 200);
    });
  }

  // Start the animation every 2s
  waveInterval = setInterval(() => {
    animateStarsLeftToRight();
  }, 2000);
});
