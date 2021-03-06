
// ELEMENTOS HTML

const promedioInput = document.getElementById('promedioInput')
const buttonPromedio = document.getElementById('buttonPromedio')
const resultPromedio = document.getElementById('resultPromedio')


const medianaInput = document.getElementById('medianaInput')
const medianaButton = document.getElementById('medianaButton')
const resultMediana = document.getElementById('resultMediana')

const modaInput = document.getElementById('modaInput')
const modaButton = document.getElementById('modaButton')
const resultModa = document.getElementById('resultModa')



// FÓRMULAS

const promedio = (arr) => {
    const operacion = arr.reduce((acc,el) => acc + el)
    const arrLength = arr.length
    const resultado = operacion / arrLength
    return resultado
}


const esPar = (n) => n % 2 === 0 

const mediana = (arr) => {
    let media
    const orden = arr.sort((a,b) => a - b)
    const ordenLength = orden.length
    const mitad = parseInt(ordenLength / 2)
    if (!esPar(ordenLength)) {
        media = orden[mitad]
    } else {
        const elOne = orden[mitad - 1]
        const elTwo = orden[mitad]
        const elOneAndTwo = promedio([elOne,elTwo])
        media = elOneAndTwo
    }
    return media
}


const moda = (arr) => {
    let orden = arr.sort((a,b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length).pop()
    return orden
}


// VERIFICANDO QUE CADA ELEMENTO DEL ARRAY SEA UN NUMERO 


const mustNumber = 'Los datos ingresados no son numeros, por favor ingresa tus datos separados por una coma ( , )'

const isString = (arr) => {
    let verify
    for (i = 0; i < arr.length; i++){
        verify = isNaN(arr[i]) 
    }
    return verify
}



// INTERACTUAMOS CON HTML


const promedioResult = (button) => {
    button.addEventListener('click', () => {
        let promedioValue = promedioInput.value
        let promedioArrString = promedioValue.split(',')
        let promedioArrNumber = []
        promedioArrString.forEach(element => {
            promedioArrNumber.push(Number(element))
        })
        if (promedioValue == 0) return
        if (!isString(promedioArrNumber)){      
            let resultado = promedio(promedioArrNumber)
            let resultado2Digits = resultado.toFixed(2)
            resultPromedio.innerHTML = resultado2Digits
        } else {
            resultPromedio.innerHTML = mustNumber
        }
    })
}


const medianaResult = (button) => {
    button.addEventListener('click', () => {
        let medianaValue = medianaInput.value
        let medianaArrString = medianaValue.split(',')
        let medianaArrNumber = []
        medianaArrString.forEach(element => {
            medianaArrNumber.push(Number(element))
        })
        if (medianaValue == 0) return
        if (!isString(medianaArrNumber)){
            let resultado = mediana(medianaArrNumber)
            let resultado2Digits = resultado.toFixed(2)
            resultMediana.innerHTML = resultado2Digits
        } else {
            resultMediana.innerHTML = mustNumber
        }
    })
}


const modaResult = (button) => {
    button.addEventListener('click', () => {
        let modaValue = modaInput.value
        let modaArrString = modaValue.split(',')
        let modaArrNumber = []
        modaArrString.forEach(element => {
            modaArrNumber.push(Number(element))
        })
        if (modaValue == 0) return
        if (!isString(modaArrNumber)){
            let resultado = moda(modaArrNumber)
            resultModa.innerHTML = resultado
        } else {
            resultModa.innerHTML = mustNumber
        }
    })
}


promedioResult(buttonPromedio)

medianaResult(medianaButton)

modaResult(modaButton)