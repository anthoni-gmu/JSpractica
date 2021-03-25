export default class Operaciones {
    constructor() {
        this.num1 = document.getElementById('num1')
        this.num2 = document.getElementById('num2')
    }

    saludo() {
        console.log('hola')
    }
    mostrar() {

        console.log(num1.value)
        console.log(num2.value)
    }
    suma() {
        return parseInt(num1.value) + parseInt(num2.value)
    }
}