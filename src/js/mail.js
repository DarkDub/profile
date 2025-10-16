(function(){
    emailjs.init("-jshdb6ONzdrzJ8Ps"); // Reemplaza con tu public key
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const btn = this.querySelector("button");
    const status = document.getElementById("form-status");
    btn.disabled = true;
    status.textContent = "Sending...";

    emailjs.sendForm("service_ydkoh6h", "plantilla_92m92pj", this)
      .then(() => {
        status.textContent = "✅ Message sent successfully!";
        btn.disabled = false;
        this.reset();
      }, (err) => {
        console.error(err);
        status.textContent = "❌ Error sending message. Try again.";
        btn.disabled = false;
      });
  });