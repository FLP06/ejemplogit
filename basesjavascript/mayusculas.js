
function convertircadena(cadena){

    let cadenaconver;



    let arreglo=cadena.split(" ")

    for (let index = 0; index < arreglo.length; index++) {
        
        let palabra_Mayuscula=arreglo[index][0].toUpperCase()
        palabra_Mayuscula+=arreglo[index].substring(1,arreglo[index].length)
        arreglo[index]=palabra_Mayuscula
    
        
    }
    cadenaconver=arreglo.join(" ")
    return cadenaconver
}

console.log(convertircadena("tengo muchos sueños"))
