
function validateForm(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtener el valor del correo electrónico
    var email = document.getElementById("email").value;
  
    // Validar el formato del correo electrónico utilizando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Mostrar un mensaje de error si el correo electrónico no cumple con el formato válido
      alert("Ingrese un correo electrónico válido.");
      return;
    }
  
    // Obtener el valor de la contraseña
    var password = document.getElementById("password").value;
  
    // Verificar la longitud mínima de caracteres
    if (email.length >= 8 && password.length >= 8) {
      // Redirigir a otra página (por ejemplo, "otra-pagina.html")
      window.location.href = "http://127.0.0.1:5503/Insumos.html";
    } else {
      // Mostrar un mensaje de error si no se cumplen los requisitos
      alert("El correo y la contraseña deben tener al menos 8 caracteres.");
    }
  }
  

