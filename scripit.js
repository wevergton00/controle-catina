/* Usamos 'DOMContentLoaded' para garantir que o script só rode 
   depois que todo o HTML da página foi carregado.
*/
document.addEventListener('DOMContentLoaded', function() {

    // --- Passo 1: Declarando variáveis ---
    
    // var: Escopo global (na web, 'window')
    var nomeCantina = "Cantina da Escola";
    
    // let: Valor que pode mudar (nosso estoque)
    let salgados = 20;
    
    // const: Valor fixo (o preço não muda)
    const precoSalgado = 5;

    // let: Total de vendas (começa em 0 e vai mudar)
    let totalVendido = 0;

    // --- Conectando o JS com o HTML ---
    // Pegar os elementos da página para poder atualizá-los
    const displayNome = document.getElementById('nome-cantina');
    const displayEstoque = document.getElementById('display-estoque');
    const displayPreco = document.getElementById('display-preco');
    const displayTotal = document.getElementById('display-total');
    const btnVender = document.getElementById('btn-vender');

    // --- Inicializando a Página ---
    // Coloca os valores iniciais na tela
    displayNome.textContent = nomeCantina;
    displayEstoque.textContent = salgados;
    // .toFixed(2) formata o número para R$ 5.00
    displayPreco.textContent = `R$ ${precoSalgado.toFixed(2)}`;

    // --- Adicionando Interatividade (O "Clique") ---
    btnVender.addEventListener('click', function() {
        // 'click' é o "evento", e a função é o que acontece
        
        // Só vende se tiver estoque
        if (salgados > 0) {
            
            // --- Passo 2: Atualizando valores ---
            salgados = salgados - 1; // Atualiza o estoque (let)
            totalVendido = totalVendido + precoSalgado; // Atualiza o total (let)
            
            // Atualiza os números na tela
            displayEstoque.textContent = salgados;
            displayTotal.textContent = totalVendido.toFixed(2);
            
            // Se acabaram os salgados
            if (salgados === 0) {
                btnVender.textContent = 'ESTOQUE ESGOTADO';
                btnVender.disabled = true; // Desabilita o botão
            }

        } 
        // Se não tiver estoque, não faz nada (o botão já estará desabilitado)
    });

    // --- Passo 3: Teste Rápido (em forma de comentário) ---
    
    // 1. O que acontece se tentar mudar 'precoSalgado'?
    // precoSalgado = 6; 
    // Se você descomentar a linha acima, o console do navegador mostrará:
    // "TypeError: Assignment to constant variable."
    // (Erro: Tentativa de atribuição a uma variável constante)
    // Isso prova que 'const' não pode ser alterado!
    
    // 2. O que acontece com 'var' e 'let' em um bloco?
    if (true) {
        var testeVar = "Sou var, vazei do bloco";
        let testeLet = "Sou let, fico no bloco";
    }
    
    console.log(testeVar); // Funciona! 'var' vaza o escopo do 'if'.
    // console.log(testeLet); // ERRO! 'let' não é definido aqui fora.
    // Isso prova que 'let' respeita o escopo de bloco {}

});
