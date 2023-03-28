export function valida (input){    
    const tipodeInput = input.dataset.tipo;
    if(validadores[tipodeInput]){
        validadores[tipodeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
    }else{
        input.parentElement.classList.add("input-container--invalid")
    }

}

const mensajesDeError = {
    nombre:{
        valueMissing: "Este campo no puede estar vacío"
    },
    email:{
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debes tener al menos 18 años"

    }
}
const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = ""
    if (!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener 18 años"
    }
    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate());
    return(diferenciaFechas <= fechaActual);/*valida si la persona es menor a 18*/

}