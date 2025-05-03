const materialsList = document.getElementById("materialsList");
let materials = JSON.parse(localStorage.getItem("materials")) || [];

function renderMaterials() {
  materialsList.innerHTML = "";
  if (materials.length === 0) {
    materialsList.innerHTML = "<p>No materials uploaded yet.</p>";
  } else {
    materials.forEach((material, index) => {
      const card = document.createElement("div");
      card.className = "material-card";
      card.innerHTML = `
        <h3>${material.courseTitle} (${material.courseCode})</h3>
        <p><strong>Department:</strong> ${material.department}</p>
        <p><strong>Semester:</strong> ${material.semester}</p>
        <a href="${material.fileContent}" download="${material.fileName}">Download Document</a>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;
      materialsList.appendChild(card);
    });

    // Attach delete button event listeners
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        deleteMaterial(index);
      });
    });
  }
}

function deleteMaterial(index) {
  materials.splice(index, 1); // Remove material from array
  localStorage.setItem("materials", JSON.stringify(materials)); // Update localStorage
  renderMaterials(); // Re-render materials
}

// Initial rendering
renderMaterials();
