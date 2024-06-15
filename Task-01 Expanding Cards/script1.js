const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        const activePanel = document.querySelector('.panel.active');
        activePanel.classList.remove('active');
        panel.classList.add('active');
    });
});
