/* =========================================
   ADMINISTRADOR
========================================= */

/*
   IMPORTANTE:
   Esta contraseña es solamente para la
   interfaz local.

   No es seguridad real para una página
   pública de GitHub Pages.

   La contraseña actual es:

   123456

   Más adelante podemos conectar esto
   con Firebase Authentication.
*/

const CLAVE_ADMIN = "123456";


function abrirAdministrador() {

    const modal = document.getElementById("adminModal");

    modal.style.display = "flex";

}


function cerrarAdministrador() {

    const modal = document.getElementById("adminModal");

    modal.style.display = "none";

}


function entrarAdmin() {

    const clave =
        document.getElementById("claveAdmin").value;

    const mensaje =
        document.getElementById("mensajeAdmin");


    if (clave === CLAVE_ADMIN) {

        mensaje.style.color = "#d4af37";

        mensaje.textContent =
            "Acceso correcto. Bienvenido, administrador.";

        setTimeout(function () {

            alert(
                "Panel de administrador preparado.\n\n" +
                "Aquí posteriormente podremos agregar " +
                "estadísticas, visitantes, trabajos, " +
                "servicios y contenido."
            );

        }, 300);

    } else {

        mensaje.style.color = "#ff5555";

        mensaje.textContent =
            "Contraseña incorrecta.";

    }

}


/* CERRAR MODAL AL HACER CLIC AFUERA */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("adminModal");

    if (event.target === modal) {

        cerrarAdministrador();

    }

});


/* ENTER PARA INICIAR SESIÓN */

document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const modal =
            document.getElementById("adminModal");

        if (modal.style.display === "flex") {

            entrarAdmin();

        }

    }

});
