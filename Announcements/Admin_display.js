window.onload = function () {
  const displayContent = document.getElementById("displayContent");
  let announcements = JSON.parse(localStorage.getItem("announcements")) || [];

  if (announcements.length === 0) {
    displayContent.innerHTML = `<p><em>No announcements submitted yet.</em></p>`;
    return;
  }

  // Function to handle deletion of an announcement
  const deleteAnnouncement = (index) => {
    announcements.splice(index, 1); // Remove the announcement from the array
    localStorage.setItem("announcements", JSON.stringify(announcements)); // Update local storage
    displayAnnouncements(); // Re-render the announcements
  };

  // Function to render all announcements
  const displayAnnouncements = () => {
    displayContent.innerHTML = ""; // Clear existing content
    if (announcements.length === 0) {
      displayContent.innerHTML = `<p><em>No announcements submitted yet.</em></p>`;
      return;
    }

    announcements.forEach((announcement, index) => {
      let announcementHtml = "";
      if (announcement.type === "message") {
        announcementHtml = `
          <div class="announcement">
            <p><strong>Message:</strong> ${announcement.content}</p>
            <small>Posted on: ${announcement.time}</small>
            <button class="delete-btn" data-index="${index}">Delete</button>
          </div>
        `;
      } else if (announcement.type === "image") {
        announcementHtml = `
          <div class="announcement">
            <p><strong>Uploaded Image:</strong></p>
            <img src="${announcement.content}" alt="Uploaded Image">
            <small>Posted on: ${announcement.time}</small>
            <button class="delete-btn" data-index="${index}">Delete</button>
          </div>
        `;
      }
      displayContent.innerHTML += announcementHtml;
    });

    // Add event listeners to all delete buttons
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        deleteAnnouncement(index); // Call delete function with the correct index
      });
    });
  };

  // Call the function to display announcements initially
  displayAnnouncements();
};
