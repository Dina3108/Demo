// Initialize EmailJS
(function () {
  emailjs.init("GK1KSo3rSzH0WXvFA"); // <-- Replace with your EmailJS Public Key
})();

// Handle form submit
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_07gd83a", "template_hom3owj", this).then(
      () => {
        document.getElementById("response-message").innerText =
          "✅ Message sent successfully!\nBased on your request Mental Health Consultant will Contact You!";
        this.reset();
      },
      (error) => {
        document.getElementById("response-message").innerText =
          "❌ Failed to send message. Try again.";
        console.error(error);
      }
    );
  });
