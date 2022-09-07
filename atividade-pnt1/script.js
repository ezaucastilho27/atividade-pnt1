var nome = prompt("Qual é o seu nome? ")
var sobrenome = prompt("Qual é o seu sobrenome? ")
var idade = prompt("Quantos anos você tem? ")

var nome1 = prompt("Qual é o seu nome? ")
var sobrenome1 = prompt("Qual é o seu sobrenome? ")
var idade1 = prompt("Quantos anos você tem? ")

var nome2 = prompt("Qual é o seu nome? ")
var sobrenome2 = prompt("Qual é o seu sobrenome? ")
var idade2 = prompt("Quantos anos você tem? ")

idaden = parseFloat(idade)
idaden1 = parseFloat(idade1)
idaden2 = parseFloat(idade2)

document.write("<h2>" + nome + " "  + sobrenome + " ➔ " + idade + " anos <br> </h2>")

document.write("<h2>" + nome1 + " "  + sobrenome1 + " ➔ " + idade1 + " anos <br> </h2>")

document.write("<h2>" + nome2 + " "  + sobrenome2 + " ➔ " + idade2 + " anos <br> </h2>")

var media = idaden + idaden1 + idaden2

document.write("A média das idades é: " + media / 3)

