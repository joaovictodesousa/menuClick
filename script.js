// Seleciona todos os itens do menu com a classe "has-submenu"
const itemsComSubmenu = document.querySelectorAll('.has-submenu');

// Adiciona um evento de clique para cada item do menu com submenu
itemsComSubmenu.forEach(item => {
  item.addEventListener('click', function() {
    // Toggle (alternar) a classe "active" no item do menu clicado
    this.classList.toggle('active');
  });
});