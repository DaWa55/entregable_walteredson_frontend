document.addEventListener("DOMContentLoaded", function() {
    
    // Menú desplegable móvil
    const toggleBtn = document.getElementById('menuToggle');
    const menuList = document.getElementById('menuList');

    if (toggleBtn && menuList) {
        toggleBtn.addEventListener('click', function() {
            menuList.classList.toggle('active');
        });
    }

    // Función del carrito
    window.agregarAlCarrito = function(producto) {
        console.log("Producto agregado al carrito: " + producto);
        alert("¡Has agregado " + producto + " a tu carrito de compras!");
    };

    // Captura de datos del formulario
    const formulario = document.getElementById('formContacto');

    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();

            const nombreCliente = document.getElementById('nombre').value;
            const emailCliente = document.getElementById('email').value;
            const telefonoCliente = document.getElementById('telefono').value;
            const mensajeCliente = document.getElementById('mensaje').value;

            console.log("--- DATOS DEL FORMULARIO RECIBIDOS ---");
            console.log("Nombre:", nombreCliente);
            console.log("Correo:", emailCliente);
            console.log("Teléfono:", telefonoCliente);
            console.log("Mensaje:", mensajeCliente);

            alert("¡Gracias " + nombreCliente + "! Tu mensaje ha sido enviado correctamente.");

            formulario.reset();
        });
    }

});