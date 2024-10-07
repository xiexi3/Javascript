const DEFAULT_DAY = "Número de día inválido";

/** Crear una función que devuelva los días de la semana en función de un número dado, haciendo uso de switch case
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */
export const getDayOfWeekSC = (day) => {
	switch(day) {
		case 1:
			day = "Lunes";
			break;
		case 2:
			day = "Martes";
			break;
		case 3:
			day = "Miércoles";
			break;
		case 4:
			day = "Jueves";
			break;
		case 5:
			day = "Viernes";
			break;
		case 6:
			day = "Sábado";
			break;
		case 7:
			day = "Domingo";
			break;
		default:
			day = DEFAULT_DAY;
			break;
	}
	return day;
};


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
	3: "Miércoles",
	4: "Jueves",
	5: "Viernes",
	6: "Sábado",
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

export const getDayOfWeekObject = (day) => {
    if (day >= 1 && day <= 7) {
		return dayOfWeek[day];
	} 
	return DEFAULT_DAY;
};


// export const getDayOfWeekObjectJuan = (day) => {
// 	return dayOfWeek[day] || DEFAULT_DAY;
// }

/************************************************ */

const DEFAULT_OPERATOR_ERROR = "Operator invalid";

/**
 * Crea un calculadora básica que sume, reste, multiplique y divide. Usando switch case
 * Operadores validos ("+", "-", "*", "/")
 * En cualquier otro caso debe devolver DEFAULT_OPERARTOR_ERROR
 */
export const simpleCalculatorSC = (operator, num_1, num_2) => {
	switch(operator) {
		case "+":
			return num_1 + num_2;
		case "-":
			return num_1 - num_2;
		case "*":
			return num_1 * num_2;
		case "/":
			return num_1 / num_2;
		default:
			return DEFAULT_OPERATOR_ERROR;
	}
};

/**
 * Crea un objeto con los operadores básicos +, -, *, ,/
 * Cada propieda del objeto debe realizar la operación correspodiente
 */
let calculatorObject = {
	1: "+",
	2: "-",
	3: "*",
	4: "/"
};

// let calculatorObjectJuan = {
// 	"+": (num_1, num2) => num_1 + num2,
// 	"-": (num_1, num2) => num_1 - num2,
// 	"*": (num_1, num2) => num_1 * num2,
// 	"/": (num_1, num2) => num_1 / num2
// };

/**
 * Crea una función que haga uso de objeto que has creado arriba y que además devuelva DEFAULT_OPERARTOR_ERROR
 * si se introduce cualquier cosa que sea diferente a "+", "-", "*", "/"
 *
 */
export const simpleCalculatorObject = (operator, num_1, num_2) => {
		switch(operator) {
		case calculatorObject[1]:
			return num_1 + num_2;
		case calculatorObject[2]:
			return num_1 - num_2;
		case calculatorObject[3]:
			return num_1 * num_2;
		case calculatorObject[4]:
			return num_1 / num_2;
		default:
			return DEFAULT_OPERATOR_ERROR;
	}
};

// export const simpleCalculatorObjectJuan = (operator, num_1, num_2) => {
// 	return calculatorObject[operator] 
// 	? calculatorObject[operator](num_1, num_2)
//	: DEFAULT_OPERATOR_ERROR;
// };
