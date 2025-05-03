window.onload = function () {
  const displayContent = document.getElementById("displayContent");
  const announcements = JSON.parse(localStorage.getItem("announcements")) || [];

  if (announcements.length === 0) {
    displayContent.innerHTML = `
        <p><em>No announcements submitted yet.</em></p>
      `;
    return;
  }

  announcements.forEach((announcement) => {
    if (announcement.type === "message") {
      displayContent.innerHTML += `
          <div class="announcement">
            <p><strong>Message:</strong> ${announcement.content}</p>
            <small>Posted on: ${announcement.time}</small>
          </div>
        `;
    } else if (announcement.type === "image") {
      displayContent.innerHTML += `
          <div class="announcement">
            <p><strong>Uploaded Image:</strong></p>
            <img src="${announcement.content}" alt="Uploaded Image" />
            <small>Posted on: ${announcement.time}</small>
          </div>
        `;
    }
  });
};
