// CUADRADO

const perimetroCuadrado = (lado) => lado * 4

const areaCuadrado = (lado) => lado * lado

console.groupEnd()

// TRIANGULO


const perimetroTriangulo = (lado1,lado2,base) => lado1 + lado2 + base

const alturaTriangulo = (base,lado) => {
    let c2 = base/2
    const hip = (lado * lado)
    const c1 = hip - (c2 * c2)
    c2 = Math.sqrt(c1) 
    return c2
}


const areaTriangulo = (base,altura) => (base * altura) / 2

// CIRCULO


const diametroCirculo = (radio) => radio * 2

const PI = Math.PI

const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio)
    return diametro * PI
}


const areaCirculo = (radio) => (radio * radio) * PI


// AQUI INTERACTUAMOS CON EL HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById('inputCuadrado')
    const resultado = document.getElementById('resultadoCuadrado')

    const value = input.value
    if (value == 0) return
    const perimetro = perimetroCuadrado(value)
    const resultadoString = perimetro.toFixed(0)
    resultado.innerHTML = resultadoString.bold() + 'cm'.bold()
}

function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado')
    const resultado = document.getElementById('resultadoCuadrado')

    const value = input.value
    if (value == 0) return

    const area = areaCuadrado(value)
    const resultadoString = area.toFixed(0)
    resultado.innerHTML = resultadoString.bold() + 'cm²'.bold()
}

function calcularPerimetroTriangulo() {
    const resultado = document.getElementById('resultadoTriangulo')

    const input = document.getElementById('inputTrianguloLado1')
    const input2 = document.getElementById('inputTrianguloLado2')
    const inputBase = document.getElementById('inputTrianguloLadoBase')

    const value = Number(input.value)
    const value2 = Number(input2.value)
    const valueBase = Number(inputBase.value)
    if (value == 0 || value2 == 0 || valueBase == 0) return

    const perimetro = perimetroTriangulo(value,value2,valueBase)
    const resultadoString = perimetro.toFixed(0)
    value != value2 ? resultado.innerHTML = 'Los lados A y B de tu triángulo no son iguales'.bold() : 
    resultado.innerHTML = resultadoString.bold() + 'cm'.bold()
}

function calcularAreaTriangulo() {
    const resultado = document.getElementById('resultadoTriangulo')

    const inputBase = document.getElementById('inputTrianguloLadoBase')
    const inputLado = document.getElementById('inputTrianguloLado1')
    const inputLado2 = document.getElementById('inputTrianguloLado2')
    const valueBase = inputBase.value
    const valueLado = inputLado.value
    const valueLado2 = inputLado2.value
    if (valueLado == 0 || valueLado2 == 0 || valueBase == 0) return

    const altura = alturaTriangulo(valueBase,valueLado)
    const area = areaTriangulo(valueBase,altura)
    const resultadoString = area.toFixed(2)
    valueLado != valueLado2 ? resultado.innerHTML = 'Los lados A y B de tu triángulo no son iguales'.bold() : 
    resultado.innerHTML = resultadoString.bold() + 'cm²'.bold()
}

function calcularAlturaTriangulo() {
    const resultado = document.getElementById('resultadoTriangulo')

    const inputBase = document.getElementById('inputTrianguloLadoBase')
    const inputLado = document.getElementById('inputTrianguloLado1')
    const inputLado2 = document.getElementById('inputTrianguloLado2')
    const valueBase = inputBase.value
    const valueLado = inputLado.value
    const valueLado2 = inputLado2.value
    if (valueLado == 0 || valueLado2 == 0 || valueBase == 0) return

    const altura = alturaTriangulo(valueBase,valueLado)
    const resultadoString = altura.toFixed(2)
    valueLado != valueLado2 ? resultado.innerHTML = 'Los lados A y B de tu triángulo no son iguales'.bold() : 
    resultado.innerHTML = resultadoString.bold() + 'cm'.bold()
}

function calcularPerimetroCirculo() {
    const resultado = document.getElementById('resultadoCirculo')

    const input = document.getElementById('inputCirculoRadio')
    const inputValue = input.value
    if (inputValue == 0) return

    const perimetro = perimetroCirculo(inputValue)
    const resultadoString = perimetro.toFixed(2)
    resultado.innerHTML = resultadoString.bold() + 'cm'.bold()
}

function calcularAreaCirculo() {
    const resultado = document.getElementById('resultadoCirculo')

    const input = document.getElementById('inputCirculoRadio')
    const inputValue = input.value
    if (inputValue == 0) return

    const area = areaCirculo(inputValue)
    const resultadoString = area.toFixed(2)
    resultado.innerHTML = resultadoString.bold() + 'cm²'.bold()
}