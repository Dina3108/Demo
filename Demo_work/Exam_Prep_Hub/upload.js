document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const department = document.getElementById("department").value;
  const semester = document.getElementById("semester").value;
  const courseCode = document.getElementById("courseCode").value;
  const courseTitle = document.getElementById("courseTitle").value;
  const documentFile = document.getElementById("document").files[0];

  const reader = new FileReader();

  reader.onload = function (event) {
    const fileData = event.target.result;

    const material = {
      department,
      semester,
      courseCode,
      courseTitle,
      fileName: documentFile.name,
      fileContent: fileData,
    };

    let materials = JSON.parse(localStorage.getItem("materials")) || [];
    materials.push(material);
    localStorage.setItem("materials", JSON.stringify(materials));

    alert("Material uploaded successfully!");
    document.getElementById("uploadForm").reset();
  };

  reader.readAsDataURL(documentFile);
});
