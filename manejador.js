function cerrarFormulario(formulario) {
    document.getElementById(formulario).style.display = 'none';
}

function mostrarFormulario(formulario) {
    document.getElementById(formulario).style.display = 'block';
}

function calcularCalificacion(formulario) {
    console.log('formulario: ' + formulario);
    const respuestas = ['1', '1']
    const form = document.getElementById(`${formulario}`);
    const checkboxes = form.querySelectorAll('input[type="radio"]:checked');

    let total = 0;
    let i = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.value == respuestas[i]) {
            total++
        }
        i++;
    });

    const calificacion = document.getElementById(`calificacion${formulario}`);
    const resultado = document.getElementById(`resultado${formulario}`);
    resultado.textContent = total;
    calificacion.style.display = 'block';
}

function validateForm() {
    let password = document.getElementById('passwordLogin').value;
    let usuario = document.getElementById('emailLogin').value;

    if (password !== "Contra123" || usuario !== "agusnato@gmail.com") {
        alert("Usuario o contraseña incorrectos. Por favor, verifique sus credenciales.");
        return false;
    }  
        window.location.href = "Progreso.html"; // Redirige a Progreso.html si las credenciales son correctas
        return true;
    
}

document.getElementById('btnConfirmar').addEventListener('click', function(event) {
    if (!validarCampos()) {
        event.preventDefault(); // Evita que el formulario se envíe si la validación no pasa
    }
});

function validarCampos() {
    var nombre = document.getElementById('nombreUsuarioRegister').value;
    var apellido = document.getElementById('apellidoUsuarioRegister').value;
    var email = document.getElementById('emailRegister').value;
    var password = document.getElementById('passwordRegister').value;
    var password2 = document.getElementById('passwordRegister2').value;
    
    if (nombre === '' || apellido === '' || email === '' || password === '' || password2 === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return false;
    }

    if (password !== password2) {
        alert("Las contraseñas no coinciden");
        return false;
    }
    
    var uppercaseRegex = /(?=.*[A-Z])/; // Verifica si hay mayúscula
    if (!uppercaseRegex.test(password)) {
        alert('La contraseña debe contener al menos una letra mayúscula.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    // Redirecciona solo si todas las validaciones pasan
    console.log("Redirigiendo a Progreso.html");
    window.location.href = 'Progreso.html';
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

