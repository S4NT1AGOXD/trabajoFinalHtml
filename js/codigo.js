function redirectToPage(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener el valor del campo de correo electrónico
    var email = document.getElementById('email').value;

    // Validar el correo electrónico utilizando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Ingrese un correo electrónico válido');
      return;
    }

    // Redireccionar a la página deseada
    window.location.href = 'http://127.0.0.1:5503/Insumos.html';
  }