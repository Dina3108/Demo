// Handle form submission
if (document.getElementById("alumniForm")) {
  document
    .getElementById("alumniForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const fileInput = document.getElementById("image");
      const file = fileInput.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const alumniData = {
            image: e.target.result, // this is base64 image
            name: document.getElementById("name").value,
            designation: document.getElementById("designation").value,
            department: document.getElementById("department").value,
            batch: document.getElementById("batch").value,
            title: document.getElementById("title").value,
            meetLink: document.getElementById("meetLink").value,
          };

          localStorage.setItem("alumniData", JSON.stringify(alumniData));
          window.location.href = "display.html";
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload an image.");
      }
    });
}

// Handle display page
if (document.getElementById("alumniDetails")) {
  const alumniData = JSON.parse(localStorage.getItem("alumniData"));

  if (alumniData) {
    document.getElementById("alumniDetails").innerHTML = `
            <img src="${alumniData.image}" alt="Alumni Image">
            <p><strong>Name:</strong> ${alumniData.name}</p>
            <p><strong>Designation:</strong> ${alumniData.designation}</p>
            <p><strong>Department:</strong> ${alumniData.department}</p>
            <p><strong>Batch:</strong> ${alumniData.batch}</p>
            <p><strong>Title:</strong> ${alumniData.title}</p>
            <a href="${alumniData.meetLink}" target="_blank">Join Google Meet</a>
        `;
  } else {
    document.getElementById("alumniDetails").innerHTML =
      "<p>No data found. Please submit the form first.</p>";
  }
}
