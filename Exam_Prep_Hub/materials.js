const materialsList = document.getElementById("materialsList");
const materials = JSON.parse(localStorage.getItem("materials")) || [];

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
    `;
    materialsList.appendChild(card);
  });
}
