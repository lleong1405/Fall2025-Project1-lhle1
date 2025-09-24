// ===== Avatar page script (added) =====

// Set the IMDb rating in one place if you want to change it later:
const RATING_FROM_IMDB = 9.3; // out of 10

window.addEventListener("DOMContentLoaded", () => {
    const ratingSpan = document.getElementById("ratingValue");
    if (ratingSpan) ratingSpan.textContent = Number(RATING_FROM_IMDB).toFixed(1);

    // Small UX touch: click rating to scroll to trailer
    const rating = document.getElementById("Rating");
    const trailer = document.getElementById("Trailer");
    if (rating && trailer) {
        rating.style.cursor = "pointer";
        rating.title = "Click to jump to the trailer";
        rating.addEventListener("click", () =>
            trailer.scrollIntoView({ behavior: "smooth", block: "center" })
        );
    }
});
