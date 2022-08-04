let semaforo=true
let contador=0

while(semaforo){

    contador++
    if(contador>100){semaforo=false}

    console.log("hola mundo"+contador)
    
}

let colores=["azul", "rojo", "naranja", "morado", "verde", "rosado"]
for (let index = 0; index < colores.length; index++) {

    console.log(colores[index])
    
    
}

let semaforo2=false

do{
    console.log("hola mundo do while")
}
while(semaforo2);

const objeto={nombre:"felipe", apellido: " cardona", edad: 18, cargo: " programador"}
for (const key in objeto) {

    console.log(key +" el valor es:"+objeto[key])



    }