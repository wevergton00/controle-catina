// (Você deve adicionar isso ao final do seu arquivo JS, 
//  depois do código que calcula o total)

// Seleciona o botão de finalizar
const botaoFinalizar = document.getElementById('finalizar-pedido');

// Adiciona um "ouvinte" de clique
botaoFinalizar.addEventListener('click', function() {
    
    // Tenta encontrar o elemento que mostra o total
    // (Assumindo que o total está dentro do '<strong>' no carrinho)
    const totalElement = document.querySelector("#carrinho strong");
    let totalValor = "0.00"; // Valor padrão

    if (totalElement) {
        // Pega o texto (Ex: "Total: R$ 5.00") e extrai apenas o número
        totalValor = totalElement.innerText.replace("Total: R$ ", "");
    }

    // Verifica se o carrinho não está vazio
    if (parseFloat(totalValor) > 0) {
        // Mostra uma mensagem de sucesso
        alert("Pedido finalizado com sucesso!\nTotal: R$ " + totalValor);
        
        // --- Opcional: Limpar o carrinho ---
        // Aqui você chamaria sua função de limpar o carrinho e redefinir o total para 0
        // Ex: limparCarrinho(); 
        // Ex: atualizarTotal(0); 

    } else {
        // Mostra uma mensagem se o carrinho estiver vazio
        alert("Seu carrinho está vazio!");
    }
});
