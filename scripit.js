/* Usamos 'DOMContentLoaded' para garantir que o script só rode 
   depois que todo o HTML da página foi carregado.
   Sem isso, o JS pode tentar encontrar um botão que ainda não existe.
*/
document.addEventListener('DOMContentLoaded', function() {

    // --- Passo 1: Declarando variáveis (DO SEU EXERCÍCIO) ---
    
    // var: Escopo global (na web, 'window')
    var nomeCantina = "Cantina da Escola";
    
    // let: Valor que pode mudar (nosso estoque)
    let salgados = 20;
    
    // const: Valor fixo (o preço não muda)
    const precoSalgado = 5;

    // let: Total de vendas (começa em 0 e vai mudar)
    let totalVendido = 0;

    // --- Fim do Passo 1 ---

    // --- Conectando o JS com o HTML ---
    // Precisamos "pegar" os elementos do HTML para poder mudar o texto deles.
    // Usamos 'const' aqui porque o *elemento* em si não vai mudar (o botão será sempre o botão)
    const displayNome = document.getElementById('nome-cantina');
    const displayEstoque = document.getElementById('display-estoque');
    const displayPreco = document.getElementById('display-preco');
    const displayTotal = document.getElementById('display-total');
    const btnVender = document.getElementById('btn-vender');

    // --- Função para Inicializar e Atualizar a Página ---
    // Criamos uma função para evitar repetir código
    function atualizarTela() {
        // Col
