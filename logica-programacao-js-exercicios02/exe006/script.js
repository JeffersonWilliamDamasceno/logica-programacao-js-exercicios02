// Solicita ao usuário que insira seu primeiro nome
var primeiroNome = prompt("Digite seu primeiro nome:");

// Converte o nome para letras maiúsculas
var nomeMaiusculas = primeiroNome.toUpperCase();

// Conta o número de letras no nome
var numeroDeLetras = primeiroNome.length;

// Exibe o nome em letras maiúsculas e o número de letras
alert("Seu nome em letras maiúsculas é: " + nomeMaiusculas);
alert("Seu nome tem " + numeroDeLetras + " letras.");
