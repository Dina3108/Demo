document.addEventListener("DOMContentLoaded", function () {
  const reviewsList = document.getElementById("reviewsList");
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  if (reviews.length === 0) {
    reviewsList.innerHTML = "<p>No reviews yet. Be the first!</p>";
  } else {
    // Newest first
    reviews.reverse().forEach((review) => {
      const div = document.createElement("div");
      div.className = "review-item";
      div.innerHTML = `
          <h3>${review.foodName}</h3>
          <p>${review.reviewText}</p>
          <small>Posted on: ${review.dateTime}</small>
        `;
      reviewsList.appendChild(div);
    });
  }
});
