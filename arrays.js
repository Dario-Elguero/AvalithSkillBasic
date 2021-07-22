const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];


    //A partir del arreglo original, obtener los siguientes resultados:
    //- indiceAmarillo: Indice de la ubicacion en el arreglo de 'Amarillo'
    indiceAmarillo = original.findIndex(color => color === 'Amarillo')
    // - cantidadColoresConA: Cuantos colores hay en el arreglo con la letra 'a' (Mayuscula o minuscula)
    cantidadColoresConA = original.filter(letraA => letraA.toLowerCase().includes('a')).length
    // - arregloSinAzul: El arreglo original sin el valor 'Azul'
    arregloSinAzul = original.filter(azul => azul !== 'Azul')
    // - ordenadoPorCantidadLetras: El arreglo orginal ordenado de forma ascendente por la cantidad de letras en su nombre.
    ordenadoPorCantidadLetras = original.sort((a,b)=>{
        const colorA = a.length
        const colorB = b.length
        
        if (colorA < colorB) return -1
        if (colorA > colorB) return 1
        return 0
        
    })
    // - arregloConNuevoColorInicio: El arreglo original con un nuevo color al inicio del mismo.
    arregloConNuevoColorInicio = ['Marron',...original]
    // - arregloConNuevoColorFin: El arreglo original con un nuevo color al final del mismo.
    arregloConNuevoColorFin = [...original,'Violeta']
    // Reemplazar este comentario con su codigo.
 

console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);