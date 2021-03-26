document.addEventListener('DOMContentLoaded', () => {

    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')
    const btnRes = document.getElementById('btnRes')
    const resul = document.getElementById('resul')

    const btnAdd = document.getElementById('btnAdd')
    const btnSub = document.getElementById('btnSub')
    const btnDiv = document.getElementById('btnDiv')
    const btnMul = document.getElementById('btnMul')

    const alert = document.getElementById('alert')

    // ------------------------------------------------

    btnAdd.onclick = () => Todo(btnAdd)
    btnMul.onclick = () => Todo(btnMul)
    btnSub.onclick = () => Todo(btnSub)
    btnDiv.onclick = () => Todo(btnDiv)

    btnRes.onclick = () => TodoOperacion()


    function TodoOperacion() {
        Operacion()

    }

    function Operacion() {

        let clase = btnAdd.classList.contains('btn-primary')
        if (clase == true) {
            add(num1, num2)

        }
        clase = btnMul.classList.contains('btn-primary')
        if (clase == true) {
            mul(num1, num2)
        }
        clase = btnSub.classList.contains('btn-primary')
        if (clase == true) {
            sub(num1, num2)
        }
        clase = btnDiv.classList.contains('btn-primary')
        if (clase == true) {
            div(num1, num2)
        }
    }

    function ResultVer(resultado) {
        resultado = ""
        let condicion = false
        while (condicion == 1) {
            if (resultado == "") {
                alert.classList.remove('d-none')
                alert.innerText = "Fill the fields with numbers"
            } else {
                condicion = true
            }


        }
        alert.classList.add('d-none')

    }


    function Todo(button) {
        Solouno(button)
        Verificar(button)


    }


    function add(num1, num2) {
        return resul.value = parseInt(num1.value) + parseInt(num2.value)
    }

    function sub(num1, num2) {
        return resul.value = parseInt(num1.value) - parseInt(num2.value)
    }

    function mul(num1, num2) {
        return resul.value = parseInt(num1.value) * parseInt(num2.value)
    }

    function div(num1, num2) {
        return resul.value = parseInt(num1.value) / parseInt(num2.value)
    }

    function Verificar(button) {
        let clase = button.classList.contains('btn-secondary')
        if (clase == 1) {
            button.classList.replace('btn-secondary', 'btn-primary')
            console.log('cambio')
        } else {
            button.classList.replace('btn-primary', 'btn-secondary')
        }
    }

    function ApagarBtn(button) {
        let clase = button.classList.contains('btn-secondary')
        if (clase == false) {
            button.classList.replace('btn-primary', 'btn-secondary')
        }
    }

    function Solouno() {
        ApagarBtn(btnSub)
        ApagarBtn(btnDiv)
        ApagarBtn(btnMul)
        ApagarBtn(btnAdd)
    }


})