// Datos de eventos (simulados)
const eventos = [
    {
        titulo: "Taller de JavaScript Avanzado",
        fecha: "15/12/2023",
        descripcion: "Aprende técnicas avanzadas de JavaScript.",
        lugar: "Online"
    },
    {
        titulo: "Introducción a React",
        fecha: "10/01/2024",
        descripcion: "Descubre los conceptos básicos de React.",
        lugar: "Oficina principal"
    },
];

// Función para mostrar los eventos en la página
function mostrarEventos() {
    const eventosDiv = document.getElementById('eventos');

    // Iterar sobre los eventos y crear elementos HTML dinámicamente
    eventos.forEach(evento => {
        const eventoDiv = document.createElement('div');
        eventoDiv.classList.add('evento');

        const titulo = document.createElement('h3');
        titulo.textContent = evento.titulo;

        const fecha = document.createElement('p');
        fecha.textContent = `Fecha: ${evento.fecha}`;

        const descripcion = document.createElement('p');
        descripcion.textContent = `Descripción: ${evento.descripcion}`;

        const lugar = document.createElement('p');
        lugar.textContent = `Lugar: ${evento.lugar}`;
        const botonRegistro = document.createElement('button');
        botonRegistro.textContent = 'Registrarse';
        botonRegistro.classList.add('boton-registro');
        botonRegistro.classList.add('btn', 'btn-success');

        botonRegistro.addEventListener('click', function () {
            alert('Te has registrado para ' + evento.titulo);
        });

        // Agregar elementos al contenedor principal de eventos
        eventoDiv.appendChild(titulo);
        eventoDiv.appendChild(fecha);
        eventoDiv.appendChild(descripcion);
        eventoDiv.appendChild(lugar);
        eventoDiv.appendChild(botonRegistro);


        eventosDiv.appendChild(eventoDiv);
    });
}

// Cuando se abra la página, se cargaran los elementos
window.onload = mostrarEventos;
