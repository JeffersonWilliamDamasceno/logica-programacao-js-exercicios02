// Solicita ao usuário que insira três valores monetários
var valor1 = parseFloat(prompt("Digite o primeiro valor monetário:"));
var valor2 = parseFloat(prompt("Digite o segundo valor monetário:"));
var valor3 = parseFloat(prompt("Digite o terceiro valor monetário:"));

// Calcula a média dos valores
var media = (valor1 + valor2 + valor3) / 3;

// Formata o resultado em moeda brasileira (R$)
var resultadoFormatado = media.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Exibe o resultado formatado
alert("A média dos valores é: " + resultadoFormatado);
