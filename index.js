import fs from 'fs'
let array = [2, 10, "go", 4, "c#", 6, "nodejs", true, "java", 9, 1, "python", 12, "ruby", "php", false]
let condicion = 'string' //string - number - boolean

function compareNumbers(a, b) {
    return a - b;
}

function procesar(arr, cond){
    if(cond != 'boolean' && cond != 'string' && cond != 'number') throw new Error('Condición inválida.')
    if(arr.length <= 0) throw new Error('El array no puede estar vacío.')
    try {
        let arr2 = arr.filter((elem) => typeof elem == cond)
        arr2 = (cond !== 'string') ? arr2.sort(compareNumbers) : arr2.sort()
        console.log(arr2)
        let doc = fs.createWriteStream("doc.txt")
        doc.write(arr2.toString())
    } catch(err){
        console.error(err)
    }
}

procesar(array, condicion)