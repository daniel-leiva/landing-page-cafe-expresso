//JSON
var formulario = document.querySelector('#formulario');
var erroresUl = document.querySelector('#errores');
var inputNombre = document.querySelector('#nombre');
var inputEmail = document.querySelector('#email');
var inputTelefono = document.querySelector('#telefono');
var botonEnviar = document.querySelector('#enviar');
//FUNCIONES
/**
* Método que valida y enviar el formulario
*/
function enviarFormulario() {
    //Expresiones regulares
    var expNombre = /^[a-zA-Z]*$/;
    var expTelefono = /^\d+$/;
    var expCorreo = /\w+@\w+\.+[a-z]/;
    // Variables
    var errores = [];
    //Condiciones
    if (inputNombre.value.length == 0) {
        errores.push('Es obligatorio llenar el campo "Nombre"');
    }
    else if (!expNombre.test(inputNombre.value)) {
        errores.push('Verifique el campo "Nombre" (solo letras)');
    }
    if (inputTelefono.value.length == 0) {
        errores.push('Es obligatorio llenar el campo "Telefóno"');
    }
    else if (!expTelefono.test(inputTelefono.value)) { //else if(isNaN(parseInt(inputTelefono.value))){
        errores.push('Verifique el campo "Telefóno" (solo números)');
    }
    if (inputEmail.value.length == 0) {
        errores.push('Es obligatorio llenar el campo "Email"');
    }
    else if (!expCorreo.test(inputEmail.value)) {
        errores.push('Verifique el campo "Correo" (formato inválido)');
    }
    // Mostramos los errores
    imprimirErrores(errores);
    // Enviamos formulario
    if (errores.length === 0) {
        erroresUl.textContent = '';
        alert("Datos Ingresados Correctamente");
        formulario.submit;
    }
}
/**
 * Imprime todos los errores en el UL
 * @param errores Array - Frases de error
 */
function imprimirErrores(errores) {
    // Limpiamos los errores anteriores en HTML
    erroresUl.textContent = '';
    // Generamos todos LI con su mensaje
    errores.forEach(function (mensaje) {
        // Creamos nuevo LI
        var nuevoLi = document.createElement('li');
        nuevoLi.textContent = mensaje;
        // Lo añadimos dentro de nuestro UL
        erroresUl.appendChild(nuevoLi);
    });
}
//EVENTOS
botonEnviar.addEventListener('click', enviarFormulario);
