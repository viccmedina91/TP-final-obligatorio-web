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
    if ((password != "Password!") || (usuario != "example@gmail.com.ar")) {
        alert("Contraseña Incorrecta");
        return false;
    }
    return true;
}

function validatarPasswordRegistracion() {
    var password = document.getElementById('passwordRegister').value;
    var confirmPassword = document.getElementById('passwordRegister2').value;

    if (password != confirmPassword) {
        alert("Las contraseñas no coinciden");
        return false;
    }
    return true;
}