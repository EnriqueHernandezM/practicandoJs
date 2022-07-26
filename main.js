/* comentarios con shift alt A ; */
/* var nombre = "julian Alvarez";
let esUnPerro ="julian alvarez";
const edad = "15"; */

/* var nombre;
nombre = "julian alvarez";
console.log(nombre);
nombre = "enrique";
console.log(nombre); */
/* let texto = "enrique: 'Hernandez'";
 */
/* let nombre = " enrique";
let apellido = "hernandez";
let unEspacio = " "
let edad = 40;

console.log(nombre+ unEspacio +apellido);
console.log(edad + 1);

let numero1 = 10;
let numero2 = 10;
console.log(numero1 + numero2);

const direccion =" arrox 12 34";
let contador = 0;

contador = 3;

let numeroA = 1;
let numeroB = 2;
let resultadosuma = numeroA + numeroB;
let resultadoresta = numeroA - numeroB;

console.log(resultadosuma);
console.log(resultadoresta);

let nomb = "";
let ed = 0;

nomb = prompt("imgrese su nombre");
ed = prompt("ingrese su edad");

console.log("Tu nombre es " + nomb + " y tu edad es " + ed); */

/* let nombreHomero = "Homer";
let apellidoHomero = "Simpsons";
let edadHomero = 40;
let espacio = " ";
let informacionHomero =
  nombreHomero + espacio + apellidoHomero + espacio + edadHomero;

console.log(informacionHomero);

let nombre2 = " ";
let edad = 0;
let origen = " ";

nombre2 = prompt("ingresa tu nombre");
edad = prompt("que edad tienes");
origen = prompt("de donde eres");

let resultadoInformacionNombre2 =
  "tu nombre es" +
  espacio +
  nombre2 +
  espacio +
  "tienes" +
  espacio +
  edad +
  espacio +
  "y vives en" +
  espacio +
  origen;
alert(resultadoInformacionNombre2);

const cdEdomex = "Estado de Mexico";
const cdMonterrey = "estado de Monterrey";
const cdDeMexico = "Ciudad de Mexico";
const cdCnacun = "Ciudad de Cancun";
const cdJuarez = "Ciudad Juarez";

let ciudadesDeMexico =
  cdCnacun +
  espacio +
  cdDeMexico +
  espacio +
  cdEdomex +
  espacio +
  cdJuarez +
  espacio +
  cdMonterrey;

console.log(ciudadesDeMexico);

let nombreLicenciaDeConducir = " ";
let edadLicencia = 0;
let direccionLicencia = 0;
let ciudadDeNacimiento = "";

nombreLicenciaDeConducir = prompt("nombre");
edadLicencia = prompt("edad");
direccionLicencia = prompt("ingresa tu direccionn completa");
ciudadDeNacimiento = prompt("lugar de nacimiento");

const carnet =
  "nombre" +
  nombreLicenciaDeConducir +
  espacio +
  "edad" +
  edadLicencia +
  espacio +
  "direccion" +
  direccionLicencia +
  espacio +
  "lugar de nacimiento" +
  ciudadDeNacimiento;
console.log(carnet);

let padreDeFamilia = " ";
let madreDeFamilia = " ";
let hermano1 = " ";
let hermano2 = " ";
let hermano3 = " ";

padreDeFamilia = prompt("ingresa el nombre de tu padre");
madreDeFamilia = prompt("ingresa el nombre de tu madre");
hermano1 = prompt("ingresa tu nombre");
hermano2 = prompt("ingresa el nombre de tu primer hermano");
hermano3 = prompt("ingrea el nombre de tu segundo hermano");

let familia =
  "integrantes de familia comenzando con el padre" +
  espacio +
  padreDeFamilia +
  espacio +
  "la madre" +
  espacio +
  madreDeFamilia +
  espacio +
  "y su hijos" +
  espacio +
  hermano1 +
  espacio +
  hermano2 +
  espacio +
  "y" +
  espacio +
  hermano3;

alert(familia); */

/* El 5% de 2 = 2*(5/100) = 2*0.05 = 0.1. */

/* let precio1 = 0;
let cantidadAdescontar = 0;

precio1 = prompt(
  "ingresa el precio del producto que deseas calcular el descuento"
);
cantidadAdescontar = prompt("ingresa el porcentaje de descuento");

let caculoDeDescuento = (precio1 / 100) * cantidadAdescontar;
let precioNeto = precio1 - caculoDeDescuento;

/* se agrega a html document.write(precioNeto); */
/* var datos = document.getElementById("datos");
datos.innerHTML = precioNeto; */
/*  con esto muestro los elementos en el domcumentovar datos = document.getElementById("datos");
datos.innerHTML = precioNeto; */

/* if (1 == 1) {
  console.log("que high es igual a umo");
} else {
  console.log("no no no");
}
 */
/* console.log("fin del codigo"); */

/* EJERCICIO CLASE 3 */

let espacio = " ";
let precio = 0;
let precio2 = 0;
precio = parseInt(prompt("ingresa el precio del primer producto"));
precio2 = parseInt(prompt("ingresa el precio del producto"));
let resultadogastos = precio + precio2;
if (resultadogastos > 1000) {
  alert("es muy caro serian" + espacio + resultadogastos);
} else if ((resultadogastos = "")) {
  alert("no es tan caro alcanza apenas serian" + espacio + resultadogastos);
} else {
  alert("no introdujiste ningun dato");
}

/* pedir un texto */
let saludo = " ";
saludo = prompt("introduzca la palabra 'Hola'");
if (saludo === "Hola") {
  console.log("Hola'bien hecho'");
} else {
  alert("no introdujiste la palabra correctamente");
}

/* pedir num por pront */

let numero = 0;
numero = prompt(
  "introduce tu numero de la suerte para saber si eres participante"
);
if (numero > 10 && numero < 50) {
  alert("felicidades puedes participar");
} else {
  alert("suerte para la proxima");
}
