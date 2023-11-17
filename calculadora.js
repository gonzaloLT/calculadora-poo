class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    sumar(num1, num2) {
        this.resultado = num1 + num2;
        return this.resultado;
    }

    restar(num1, num2) {
        this.resultado = num1 - num2;
        return this.resultado;
    }

    multiplicar(num1, num2) {
        this.resultado = num1 * num2;
        return this.resultado;
    }

    dividir(num1, num2) {
        if (num2 !== 0) {
            this.resultado = num1 / num2;
            return this.resultado;
        } else {
            return 'No se puede dividir por 0';
        }
    }

    obtenerResultado() {
        return this.resultado;
    }
}

module.exports = Calculadora;