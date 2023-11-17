const readline = require("readline-sync");
const Calculadora = require("./calculadora");

const calc = new Calculadora();

let num1,
    num2,
    op,
    seguir;

do {
    console.clear();
    console.log('CALCULADORA')
    console.log('Elija qué operación realizar:')
    console.log('1. SUMAR');
    console.log('2. RESTAR')
    console.log('3. DIVIDIR')
    console.log('4. MULTIPLICAR')
    console.log('0. SALIR')
    op = readline.question("Ingrese su opcion: ")

    switch (parseInt(op)) {
        case 1:
            num1 = readline.questionInt('Ingrese el primer operando: ')
            num2 = readline.questionInt('Ingrese el segundo operando: ')
            console.log('Resultado:', calc.sumar(num1, num2))
            seguir = readline.question("Presione enter para continuar...")
            break;
        case 2:
            num1 = readline.questionInt('Ingrese el primer operando: ')
            num2 = readline.questionInt('Ingrese el segundo operando: ')
            console.log('Resultado:', calc.restar(num1, num2))
            seguir = readline.question("Presione enter para continuar...")
            break;
        case 3:
            num1 = readline.questionInt('Ingrese el numerador: ')
            num2 = readline.questionInt('Ingrese el denominador (distinto de 0): ')
            console.log('Resultado:', calc.dividir(num1, num2))
            seguir = readline.question("Presione enter para continuar...")
            break;
        case 4:
            num1 = readline.questionInt('Ingrese el primer factor: ')
            num2 = readline.questionInt('Ingrese el segundo factor: ')
            console.log('Resultado:', calc.multiplicar(num1, num2))
            seguir = readline.question("Presione enter para continuar...")
            break;
        case 0:
            console.log("Ha salido de la calculadora")
            break;
        default:
            console.log('Opcion no valida. Intente de nuevo.');
            break;
    }
} while (op != 0);
