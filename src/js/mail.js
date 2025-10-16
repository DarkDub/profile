(function () {
  emailjs.init(window.emailConfig.publicKey);
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = this.querySelector("button");
  btn.disabled = true;

  showToast("Sending your message...", "info");

  emailjs
    .sendForm(window.emailConfig.serviceID, window.emailConfig.templateID, this)
    .then(() => {
      showToast("✅ Message sent successfully!", "success");
      btn.disabled = false;
      this.reset();
    })
    .catch((err) => {
      console.error(err);
      showToast("❌ Error sending message. Try again.", "error");
      btn.disabled = false;
    });
});

/* 🔔 Sistema de alertas minimalistas */
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.textContent = message;

  // Estilos base
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "10px";
  toast.style.color = "white";
  toast.style.fontSize = "15px";
  toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  toast.style.zIndex = "9999";
  toast.style.opacity = "0";
  toast.style.transform = "translateY(20px)";
  toast.style.transition = "all 0.4s ease";

  // Colores según tipo
  switch (type) {
    case "success":
      toast.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
      break;
    case "error":
      toast.style.background = "linear-gradient(135deg, #ef4444, #b91c1c)";
      break;
    default:
      toast.style.background = "linear-gradient(135deg, #3b82f6, #2563eb)";
  }

  document.body.appendChild(toast);

  // Animación de entrada
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 100);

  // Desaparición automática
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
