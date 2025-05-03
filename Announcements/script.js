function submitMessage() {
  const message = document.getElementById("messageInput").value.trim();

  if (message === "") {
    alert("Please type a message before submitting.");
    return;
  }

  let announcements = JSON.parse(localStorage.getItem("announcements")) || [];

  announcements.push({
    type: "message",
    content: message,
    time: new Date().toLocaleString(),
  });

  localStorage.setItem("announcements", JSON.stringify(announcements));
  alert("Message saved! Go to the display page to see it.");
  document.getElementById("messageInput").value = "";
}

function uploadImage() {
  const fileInput = document.getElementById("imageInput");

  if (fileInput.files.length === 0) {
    alert("Please select an image to upload.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    let announcements = JSON.parse(localStorage.getItem("announcements")) || [];

    announcements.push({
      type: "image",
      content: e.target.result,
      time: new Date().toLocaleString(),
    });

    localStorage.setItem("announcements", JSON.stringify(announcements));
    alert("Image saved! Go to the display page to see it.");
    fileInput.value = "";
  };

  reader.readAsDataURL(file);
}
