// const objPrueba = {
//     nombre: "Adrian",
//     edad: 25,
//     ciudad: "Madrid",
//     profesiones: {
//         primaria: "Ingeniero",
//         secundaria: "Estudiante"
//     },
//     hobbies: ["escalada", "lectura", "musica"],
//     activo: true,
//     contacto: {
//         email: "adrian@example.com",
//         telefono: "123456789"
//     }
// };


// function obtenerValores(obj) {
//     return this.values(obj);
// }

// const valores = obtenerValores(objPrueba);
// console.log(valores); // Devuelve un array de los valores

const DEFAULT_DAY = "Número de día inválido";


/** Crear un objeto que devuelva los días de la semana en función de un número dado, haciendo uso de un objeto literal
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 */

let dayOfWeek = {
	1: "Lunes",
	2: "Martes",
	3: "Miercoles",
	4: "Jueves",
	5: "Viernes",
	6: "Sabado",
	7: "Domingo",
};

/** Crear una función que haciendo uso del objeto literal definido arriba
 * devuelva los días de la semana en función de un número dado
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */

const getDayOfWeekObject = (day) => {
    return dayOfWeek[day];
};