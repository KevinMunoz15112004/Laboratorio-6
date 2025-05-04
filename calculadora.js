//Función suma
export const suma = (x, y) => x + y

//Función resta
export const resta = (x, y) => x - y

//Función multiplicar
export const multiplicar = (x, y) => x * y

//Función dividir
export const dividir = (x, y) => {
    if (y === 0) {
        return "No se puede dividir para 0"
    }
    return Math.round((x / y)*100)/100
}

// Cada función será llamada en el archivo "calcular.js"