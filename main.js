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