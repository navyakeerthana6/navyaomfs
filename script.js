
// PATIENT ENQUIRY FORM

const queryForm = document.getElementById("patient-query-form");

// Replace this with the same WhatsApp number used in your button.
const doctorWhatsAppNumber = "919945156307";

queryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("patient-name").value;
    const phone = document.getElementById("patient-phone").value;
    const message = document.getElementById("patient-message").value;

    const whatsappMessage =
        `Hello Dr. Navya Keerthana,

My name is ${name}.
My contact number is ${phone}.

My enquiry:
${message}`;

    const whatsappURL =
        `https://wa.me/${doctorWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});
