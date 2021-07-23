const original = {
    a: 1,
    b: 2,
    c: 3,
};
// -------
let sinB = null;
let valorDeC = null;

    // Utilizando SOLAMENTE destructoring, obtener los siguientes resultados:
    // - sinB: Una copia del objeto original sin la clave "b"
    let {a,c} = original
    sinB = {a,c}
    // - valorDeC: Obtener el valor de la clave "c". (¡No puede hacer "valorDeC = original.c"!)
    let {c:valor} = original
    valorDeC = valor
    // Reemplazar este comentario con su codigo.


console.log(sinB);
console.log(valorDeC);