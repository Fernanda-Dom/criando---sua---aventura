document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const proximoPasso = button.getAttribute('data-proximo');
        document.querySelectorAll('.passo').forEach(passo => {
            passo.classList.remove('ativo');
        });
        document.getElementById(`passo-${proximoPasso}`).classList.add('ativo');
    });
});
