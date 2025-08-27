/*
  Clase 1
*/
/*
let a = 10;
let b = 2;
let c;
c = dividir(a,b);
console.log("c: ",c);

let dividirFlecha = (a,b) => { return a/b; }
c = dividirFlecha(a,b);
console.log("c, funcion flecha : ", c)

function dividir(a,b){
  return a/b;
}

console.log(saludar("Rodrigo"))

function saludar(nombre){
  return 'Hola como estás '+nombre+"?";
}

function calcularArea(base,altura){
  return base * altura;
}

console.log("11 es par ? ",esPar(11))
function esPar(nro){ return (nro%2 == 0); }

function encontrarMayor(a,b){
  return a > b ? a : b
}
console.log("el mayor de 10 y 11 es : "+encontrarMayor(100,11))
*/

/*
  clase 2
*/

let arrayNrosEnteros = [1,2,3,4,5,6,7,8,9,10,11];
let acu = 0;
/*arrayNrosEnteros.forEach(e => {
  acu += e;
});*/
arrayNrosEnteros.forEach(function(element){
  acu += element;
});
console.log("la suma es: ", acu);

/*let obj = {
  pares: 0,
  impares: 0
}
arrayNrosEnteros.forEach(e => {
  if(e % 2 == 0){
    obj.pares += 1;
  }else obj.impares += 1;
});
console.log("cantidad de pares: ",obj.pares,"\tCantidad de impares: ",obj.impares);
*/
let cantPares = 0, cantImpares = 0;
arrayNrosEnteros.forEach(function(element){
  if(element % 2 == 0){
    cantPares += 1;
  }else cantImpares += 1;
});
console.log("cantidad de pares: ",cantPares,"\tCantidad de impares: ",cantImpares);

let arrayString = ["hola", "mundo"];
arrayString.forEach(function(elem, pos, arrayString){
  arrayString[pos] = elem.toUpperCase();
});
/*let arrayString2 = [];

arrayString.forEach(e => {
  arrayString2.push(e.toUpperCase());
});*/
console.log("ahora nvo arrayString: ", arrayString);
