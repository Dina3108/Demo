const autoDrivers = [
  {
    name: "Bala",
    autoName: "Easan Auto & Cars",
    contact: "9597332211",
  },
  {
    name: "Sabari",
    autoName: "Shree Sabari Auto",
    contact: "9788709936",
  },
  {
    name: "No Name",
    autoName: "Aanandhi Auto",
    contact: "7654321098",
  },
  {
    name: "S.Kandasamy",
    autoName: "SPG Autos",
    contact: "9865698646",
  },
];
const cabs = [
  {
    cabName: "Ola Cab",
    link: "https://book.olacabs.com/",
  },
  {
    cabName: "Uber Cab",
    link: "https://www.uber.com/in/en/",
  },
];

// Populate Auto Drivers
const autoContainer = document.getElementById("auto-drivers");

autoDrivers.forEach((driver) => {
  const card = document.createElement("div");
  card.className = "driver-card";

  card.innerHTML = `
        <div class="driver-name">${driver.name}</div>
        <div class="auto-name">${driver.autoName}</div>
        <div class="contact">Contact: ${driver.contact}</div>
    `;

  autoContainer.appendChild(card);
});

// Populate Cabs
const cabContainer = document.getElementById("cab-drivers");

cabs.forEach((cab) => {
  const card = document.createElement("div");
  card.className = "driver-card";

  card.innerHTML = `
        <div class="cab-name">${cab.cabName}</div>
        <a class="link" href="${cab.link}" target="_blank">Book Now</a>
    `;

  cabContainer.appendChild(card);
});
