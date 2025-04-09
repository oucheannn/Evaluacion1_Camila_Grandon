//este codigo es de contact, formulario de contacto y que tenga @
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let correo = document.getElementById("correo").value;

    if (!correo.includes("@")) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }


    // Mostrar modal
    $('#mensajeEnviadoModal').modal('show');

    // Limpiar formulario después de enviar
    document.getElementById("contactForm").reset();
});