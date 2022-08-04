let numero= prompt("ingrese un numero de tres digitos por favor");
if(numero.length>=3){
    console.log(numero.split("").reverse().join(""))

}
else{

    console.log("el numero no es de tres digitos")

}

let meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
for (let index = 0; index < meses.length; index++) {

    console.log(meses[index])
}


let numero1=5
let numero2=8

if(numero1<=numero2){
    console.log("numero1 es mayor que numero2")}

    if(numero2>=0){
        console.log("numero2 es positivo")
    }
    if(numero1<0||numero1!=0){
        console.log("numero1 es negativo o distinto de cero")

    }

    if(numero1+1<numero2){
        console.log("incrementar en una unidad el valor de numero1 no lo hace mayor o igial que numero2")
    }