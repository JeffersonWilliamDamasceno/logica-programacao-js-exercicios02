// Solicita um valor numérico ao usuário
var valorNumerico = Number(prompt("Digite um valor numérico:"));

// Formata o valor como moeda brasileira
var valorFormatado = valorNumerico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Exibe o valor formatado
alert(`O valor formatado como moeda é: ${valorFormatado}`);


