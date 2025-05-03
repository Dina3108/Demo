document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const foodName = document.getElementById("foodName").value.trim();
    const reviewText = document.getElementById("reviewText").value.trim();

    if (foodName && reviewText) {
      const now = new Date();
      const dateTime = now.toLocaleString(); // Example: "5/3/2025, 3:45 PM"

      let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
      reviews.push({ foodName, reviewText, dateTime });
      localStorage.setItem("reviews", JSON.stringify(reviews));

      alert("Review submitted successfully!");
      document.getElementById("reviewForm").reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
