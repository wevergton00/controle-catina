// Espera o HTML carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NOSSOS DADOS (O CARDÁPIO) ---
    const menuItems = [
        { id: 1, name: 'Pão de Queijo', price: 3.50 },
        { id: 2, name: 'Suco de Laranja (Copo)', price: 5.00 },
        { id: 3, name: 'Misto Quente', price: 6.00 },
        { id: 4, name: 'Bolo de Chocolate (Fatia)', price: 4.50 },
        { id: 5, name: 'Refrigerante (Lata)', price: 4.00 }
    ];

    // --- 2. NOSSO CARRINHO (COMEÇA VAZIO) ---
    let cart = [];

    // --- 3. SELECIONANDO ELEMENTOS DO HTML ---
    const menuItemsContainer = document.getElementById('menu-items');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    // --- 4. FUNÇÃO PARA MOSTRAR OS ITENS DO CARDÁPIO NA TELA ---
    function renderMenu() {
        menuItems.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');
            
            menuItemElement.innerHTML = `
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <span class="price">R$ ${item.price.toFixed(2)}</span>
                </div>
                <button class="add-to-cart-btn" data-id="${item.id}">Adicionar</button>
            `;
            
            // Adiciona o "ouvinte" de clique para o botão "Adicionar"
            menuItemElement.querySelector('.add-to-cart-btn').addEventListener('click', () => {
                addToCart(item.id);
            });

            menuItemsContainer.appendChild(menuItemElement);
        });
    }

    // --- 5. FUNÇÃO PARA ADICIONAR UM ITEM AO CARRINHO ---
    function addToCart(itemId) {
        // Encontra o item no cardápio pelo ID
        const item = menuItems.find(i => i.id === itemId);
        
        if (item) {
            cart.push(item); // Adiciona o item ao array do carrinho
            renderCart(); // Atualiza a exibição do carrinho
        }
    }

    // --- 6. FUNÇÃO PARA MOSTRAR OS ITENS DO CARRINHO NA TELA ---
    function renderCart() {
        // Limpa o carrinho antes de adicionar os itens
        cartItemsContainer.innerHTML = '';
        
        let total = 0;

        cart.forEach(item => {
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItemElement);
            
            // Soma o preço do item ao total
            total += item.price;
        });

        // Atualiza o texto do preço total
        totalPriceElement.textContent = total.toFixed(2);
    }
    
    // --- 7. FUNÇÃO PARA O BOTÃO "FINALIZAR PEDIDO" ---
    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        
        // Cria uma mensagem com o resumo do pedido
        let orderSummary = 'Pedido Finalizado:\n';
        cart.forEach(item => {
            orderSummary += `- ${item.name} (R$ ${item.price.toFixed(2)})\n`;
        });
        orderSummary += `\nTotal: R$ ${totalPriceElement.textContent}`;

        alert(orderSummary);
        
        // Limpa o carrinho após finalizar
        cart = [];
        renderCart();
    });

    // --- INICIALIZAÇÃO ---
    renderMenu(); // Chama a função para mostrar o cardápio assim que a página carrega

});
