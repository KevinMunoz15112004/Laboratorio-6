//Importamos las funciones creadas en el archivo "calculadora.js"
import { suma, resta, multiplicar, dividir } from './calculadora.js'

const calcular = (calculo, x, y) => {
    switch (calculo) {
        case "sumar":
            return suma(x, y)
        case "restar":
            return resta(x, y)
        case "multiplicar":
            return multiplicar(x, y)
        case "dividir": 
            return dividir(x, y)
        default:
            return "Operación no reconocida"
    }
}

//La función creada en este archivo se importará en el archivo "index.js"
export default calcular