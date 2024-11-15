export function Rater(ratingElement) {
  const stars = ratingElement.querySelectorAll(".star");

  const highlightRating = (rating) => {
    stars.forEach((star) => {
      star.style.color =
        rating >= star.getAttribute("data-value") ? "gold" : "gray";
    });
  };
  const ratingHover = (ev) => {
    const currentHover = ev.currentTarget.getAttribute("data-value");
    highlightRating(currentHover);
  };
  const restRating = (ev) => {
    const currentRating = ratingElement.getAttribute("data-rating");
    highlightRating(currentRating);
  };
  const setRating = (ev) => {
    ratingElement.setAttribute(
      "data-rating",
      ev.currentTarget.getAttribute("data-value")
    );
  };
  restRating();
  stars.forEach((star) => {
    star.addEventListener("click", setRating);
    star.addEventListener("mouseover", ratingHover);
  });

  ratingElement.addEventListener("mouseout", restRating);
}
