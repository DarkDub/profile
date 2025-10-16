(function() {
  emailjs.init(window.emailConfig.publicKey);
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const btn = this.querySelector("button");
  const status = document.getElementById("form-status");

  btn.disabled = true;
  status.textContent = "Sending...";

  emailjs.sendForm(
    window.emailConfig.serviceID,
    window.emailConfig.templateID,
    this
  )
  .then(() => {
    status.textContent = "Message sent successfully!";
    btn.disabled = false;
    this.reset();
  }, (err) => {
    console.error(err);
    status.textContent = "Error sending message. Try again.";
    btn.disabled = false;
  });
});
