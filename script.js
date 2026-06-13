// =======================================================
// 1. EFEITO NO CABEÇALHO (HEADER) AO ROLAR A PÁGINA
// =======================================================
// Esse código "escuta" o movimento de rolagem (scroll) da tela.
window.addEventListener('scroll', function () {
    // Pega o elemento <header> do seu HTML
    const header = document.querySelector('header');

    // Se a página for rolada mais de 50 pixels para baixo...
    if (window.scrollY > 50) {
        // Adiciona uma sombra preta suave embaixo do cabeçalho
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    } else {
        // Se voltar pro topo, tira a sombra
        header.style.boxShadow = 'none';
    }
});


// =======================================================
// 2. INTERATIVIDADE NOS CARDS DE PRODUTOS
// =======================================================
// Pega todos os elementos que têm a classe ".card"
const cards = document.querySelectorAll('.card');

// O 'forEach' passa por cada um dos cards encontrados
cards.forEach(card => {
    // Adiciona um evento de "clique" em cada card
    card.addEventListener('click', () => {
        // Pega o texto que está dentro do <h3> do card clicado (ex: 🌾 Mandioca)
        const tituloCard = card.querySelector('h3').innerText;

        // Exibe um alerta na tela para o usuário
        alert(`Você clicou em ${tituloCard}!\n\nDica para o projeto: No futuro, você pode criar uma página nova só com mais detalhes sobre a produção familiar deste alimento no Paraná.`);
    });

    // Muda o cursor para a "mãozinha" para indicar que é clicável
    card.style.cursor = 'pointer';
});