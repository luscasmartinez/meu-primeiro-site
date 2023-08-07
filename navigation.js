// navigation.js
document.addEventListener('DOMContentLoaded', function () {
    // Selecionar todos os links de navegação
    const navLinks = document.querySelectorAll('a.nav-link');

    // Selecionar todas as seções com a classe "section"
    const sections = document.querySelectorAll('.section');

    // Ocultar todas as seções, exceto a primeira
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

    // Adicionar o evento de clique a todos os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Obter o atributo "data-target" para identificar a seção a ser exibida
            const targetSectionId = link.getAttribute('data-target');

            // Percorrer todas as seções e ocultá-las, exceto a seção de destino
            sections.forEach(section => {
                if (section.id === targetSectionId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});
