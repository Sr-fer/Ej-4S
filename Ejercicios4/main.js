function ejercicio1 () {
var numero1 = prompt("Introducir un numero") 
var numero2 = prompt("Introducir otro numero")
var diferencia = (numero1%numero2)
var n3 = new Boolean(diferencia == 0)
alert(n3)
}

function ejercicio2() {
var numero1 = prompt("Introducir un numero") 
var n2 = new Boolean (numero1 > 100) 
alert(n2)
var primo = "true"
for(var i=2;i<numero1-1;i++) {
if(numero1%i==0) 
alert(primo = "false")
}
if (numero1 = primo) {
alert (primo);
}
}

function ejercicio3() {
var cadenatexto = prompt("Introducir una cadena de")
for(var i =0; i<=cadenatexto.length; i++)
alert(cadenatexto.charAt(i))
}

function ejercicio4() {
var alimento = prompt("Elige entre: leche, huevos, yogurt natural")
if (alimento == "leche") {
var cantidades = prompt("Eliga la cantidad deseada: 1l, 2l, 3l")
}
if (cantidades == "1l") {
alert("Proteinas: 3 , Grasas: 0,6 , Azucar: 5 ") 
}
else  if (cantidades == "2l") {
alert("Proteinas: 6 , Grasas: 1,2 , Azucar: 10 ")
}
else  if (cantidades == "3l") {
alert("Proteinas: 9 , Grasas: 1,8 , Azucar: 15 ")
}
if (alimento == "huevos") {
var cantidades2 = prompt("Eliga la cantidad deseada: 1, 2, 3")
}
else if (cantidades2 == "1") {
alert("Proteinas: 13 , Grasas: 3,3 , Azucar: 1,1 ")
}
else if (cantidades2 == "2") {
alert("Proteinas: 26 , Grasas: 6,6 , Azucar: 2,2 ")
}
else if (cantidades2 == "3") {
alert("Proteinas: 39 , Grasas: 9,9 , Azucar: 3,3 ")
}
if (alimento == "yogurt natural") {
var cantidades2 = prompt("Eliga la cantidad deseada: 1, 2, 3")
}
if (cantidades2 == "1") {
alert("Proteinas: 3,2 , Grasas: 4 , Azucar: 5 ")
}
else if (cantidades2 == "2") {
alert("Proteinas: 6,4 , Grasas: 8 , Azucar: 10 ")
}
else if (cantidades2 == "3") {
alert("Proteinas: 9,6 , Grasas: 12 , Azucar: 15 ")
}
}

function ejercicio5() { 
var lado = prompt("Introducir valor del lado")
var altura = prompt("Introducir valor de la altura")
calculoArea(lado*altura) 
}
function calculoArea(area) {
alert(area + " Este es el area del cuadrilatero ") 
}

function ejercicio6() {
var n1 = parseInt(prompt("Introducir un numero"))
alert(n1/1)
var n2 = parseInt(prompt("Introducir un numero"))
var nm2 = (n1 + n2)
alert(nm2/2)
var n3 = parseInt(prompt("Introducir un numero"))
var nm3 = (n1 + n2 + n3)
alert(nm3/3)
var n4 = parseInt(prompt("Introducir un numero"))
var nm4 = (n1 + n2 + n3 + n4)
alert(nm4/4)
var n5 = parseInt(prompt("Introducir un numero"))
var nm5 = (n1 + n2 + n3 + n4 + n5)
alert(nm5/5)
var n6 = parseInt(prompt("Introducir un numero"))
var nm6 = (n1 + n2 + n3 + n4 + n5 + n6)
alert(nm6/6)
var n7 = parseInt(prompt("Introducir un numero"))
var nm7 = (n1 + n2 + n3 + n4 + n5 + n6 + n7)
alert(nm7/7)
var n8 = parseInt(prompt("Introducir un numero"))
var nm8 = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8)
alert(nm8/8)
var n9 = parseInt(prompt("Introducir un numero"))
var nm9 = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9)
alert(nm9/9)
var n10 = parseInt(prompt("Introducir un numero"))
var nm10 = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10)
alert(nm10/10)
}

function ejercicio7() {
var elegir = prompt("Elige entre, latigo, antorcha, machete o brujula para ver sus atributos")
if (elegir == "latigo") {
var latigo = alert("Arma")
var clase4 = alert("Armas largo alcance")
var nivel = alert("Nivel 1")
var raza = alert("Humanos")
alert(latigo, clase4, nivel, raza)
}
else if (elegir == "antorcha") { 
var antorcha = alert("Utensilio")
var clase2 = alert("Utensilio para dar luz")
var nivel = alert("Nivel 1")
var raza = alert("Humanos")
alert(antorcha, clase2, nivel, raza)
}
else if (elegir == "machete") {
var machete = alert("Arma")
var clase1 = alert("Armas corto alcance")
var nivel = alert("Nivel 1")
var raza = alert("Humanos")
alert(machete, clase1, nivel, raza)
}
else if (elegir == "brujula") {
var brujula = alert("Utensilio")
var clase3 = alert("Utensilio para orientarse")
var nivel = alert("Nivel 1")
var raza = alert("Humanos")
alert(brujula, clase3, nivel, raza)
}
}

function ejercicio8() {
var operacion = prompt("Tipo de operación que quiere hacerse: resta, suma, multiplicacion, division")
if (operacion == "resta") {
var numero1 = parseInt(prompt("Numero"))
var numero2 = parseInt(prompt("Numero 2"))
var resta =(numero1 - numero2)
alert(resta)
}
else if (operacion == "suma") {
var numero1 = parseInt(prompt("Numero"))
var numero2 = parseInt(prompt("Numero 2"))
var suma = (numero1 + numero2)
alert(suma)
}
else if (operacion == "multiplicacion") {
var numero1 = parseInt(prompt("Numero"))
var numero2 = parseInt(prompt("Numero 2"))
var multiplicacion = (numero1 * numero2)
alert(multiplicacion)
}
else if (operacion == "division") {
var numero1 = parseInt(prompt("Numero"))
var numero2 = parseInt(prompt("Numero 2"))
var division = (numero1/numero2)
alert(division)
}
var cot = prompt("continuar o terminar")
if(cot == "continuar") {
return ejercicio8()
}
else if(cot == "terminar") {
alert("Finalizado con exito")
}
}

function ejercicio9 () {
var ejercicio = prompt("Elegir ejercicio: ej1, ej2, ej3, ej4, ej5, ej6, ej7, ej8")
if (ejercicio == "ej1") {
ejercicio1()
}
else if (ejercicio == "ej2") {
ejercicio2()
}
else if (ejercicio == "ej3") {
ejercicio3()
}
else if (ejercicio == "ej4") { 
ejercicio4()
}
else if (ejercicio == "ej5") { 
ejercicio5()
}
else if (ejercicio == "ej6") {
ejercicio6()
}
else if (ejercicio == "ej7") {
ejercicio7()
}
else if (ejercicio == "ej8") {
ejercicio8()
}
var cot = prompt("Elegir otro ejercicio?: si o no")
if(cot == "si") {
return ejercicio9()
}
else if(cot == "no") {
alert("Finalizado con exito")
}
}