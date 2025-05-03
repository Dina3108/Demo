function saveMenu() {
  const morning = document.getElementById("morningSnack").value;
  const afternoon = document.getElementById("afternoonSnack").value;
  const evening = document.getElementById("eveningSnack").value;
  const night = document.getElementById("nightSnack").value;

  // Save values to localStorage
  localStorage.setItem("morningSnack", morning);
  localStorage.setItem("afternoonSnack", afternoon);
  localStorage.setItem("eveningSnack", evening);
  localStorage.setItem("nightSnack", night);

  // Redirect to menu.html
  window.location.href = "menu.html";
}
