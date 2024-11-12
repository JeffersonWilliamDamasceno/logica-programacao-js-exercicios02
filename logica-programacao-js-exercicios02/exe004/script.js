// Função para contar o número total de letras
function contarLetras(nome) {
    // Remove espaços em branco e conta os caracteres
    return nome.replace(/\s+/g, '').length;
  }
  
  // Solicita ao usuário que digite o nome completo
  const nomeCompleto = prompt("Digite seu nome completo:");
  
  // Chama a função e armazena o número de letras
  const numeroTotalDeLetras = contarLetras(nomeCompleto);
  
  // Exibe o número total de letras
  alert("O número total de letras no nome completo é: " + numeroTotalDeLetras);
  