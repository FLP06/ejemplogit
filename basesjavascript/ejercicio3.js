
let programación = {
    lenguajes : [ " JavaScript " , " Python " , " Ruby " ],
    desafiante : verdadero,
    gratificante : verdadero ,
    dificultad : 8 ,
    chistes : " http://stackoverflow.com/questions/234075/what-is -su-mejor-programador-broma "
};


let agregar_lenguajes= programación.lenguajes.push("go")
let cambiar_dificultad=programación.dificultad=7
let descartar_chistes=delete(programación.chistes)
let agragar_objeto=programación.isFun=true

console.log("estos son los lenguajes de el objeto programacion")
for (let index = 0; index < programación.lenguajes.length; index++) {
console.log(programación.lenguajes[index])

    
}


console.log("estas son las claves de el objeto programacion")
for (const key in programación) {
    let clave=key
    console.log(clave)

        
    }

    console.log("estos son los valores de el objeto programacion")
for (const key in programación) {


    }


