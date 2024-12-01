document.querySelectorAll('.filme').forEach(filme => {
    filme.addEventListener('mousemove', (e) => {
        const rect = filme.getBoundingClientRect(); // Pega a posição do elemento
        const x = e.clientX - rect.left; // Calcula a posição do cursor no elemento
        const y = e.clientY - rect.top;

        // Aplica a posição ao brilho (pseudo-elemento `::before`)
        filme.style.setProperty('--mouse-x', `${x}px`);
        filme.style.setProperty('--mouse-y', `${y}px`);
    });
});
