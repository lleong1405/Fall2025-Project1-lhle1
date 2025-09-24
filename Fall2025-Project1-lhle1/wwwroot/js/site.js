const RATING_FROM_IMDB = 9.3; 

window.addEventListener("DOMContentLoaded", () => {
    const ratingSpan = document.getElementById("ratingValue");
    if (ratingSpan) ratingSpan.textContent = Number(RATING_FROM_IMDB).toFixed(1);

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
