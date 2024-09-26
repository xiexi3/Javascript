const objPrueba = {
    nombre: "Adrian",
    edad: 25,
    ciudad: "Madrid",
    profesiones: {
        primaria: "Ingeniero",
        secundaria: "Estudiante"
    },
    hobbies: ["escalada", "lectura", "musica"],
    activo: true,
    contacto: {
        email: "adrian@example.com",
        telefono: "123456789"
    }
};


function obtenerValores(obj) {
    return this.values(obj);
}

const valores = obtenerValores(objPrueba);
console.log(valores); // Devuelve un array de los valores
