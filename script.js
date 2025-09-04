function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  }
  emailjs.send("service_zwm8r6y","template_wpp71f4",parms).then(alert("Email Sent"))
}
