
const calculateDogAge=(años_humanos,años_dog)=>{console.log(años_humanos*años_dog+" esta es la edad de tu perro en años perro")}
calculateDogAge(5,7)
calculateDogAge(8,4)
calculateDogAge(5,3)


function  convertiraFaherenheit(celsius){
    let Faherenheit
Faherenheit= (celsius*9/5) +32;
return Faherenheit;

}


console.log(convertiraFaherenheit(12)+" estos grados son faherenheit")


function convertirAcelsius(faherenheit){
    let celsius
    celsius=(faherenheit -32) * 5/9;
    return celsius
}

console.log(convertirAcelsius(50)+ " estos son grados celsius")


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
console.log(convertircadena("el rapido zorro marron"))


const functionContarVocales=function(cadena){
    let contador=0
    let arreglo =cadena.split("")

    for (let index = 0; index < arreglo.length; index++) {
        let letra=arreglo[index]
        if(letra=="a"||letra=="e" || letra =="i" || letra=="o" || letra=="u"){
            contador++

        }
          }
          return contador
}
console.log(functionContarVocales("hola como estas, como te va aeiou"))


function realizarAccion(cadena,funcion){

    console.log(funcion(cadena))
}
realizarAccion("hola mundo",convertircadena)