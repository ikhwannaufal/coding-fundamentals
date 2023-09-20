// When entering ctrl+K, command palette will appear
const commandPalette = document.querySelector('.palette')

// if the wrapper is displayed, hide it
// if not displayed, display block
// if display block, fade in
// if display none, fade out

document.addEventListener('keydown', (e) => {
    console.log('keydown', e)

    if (e.ctrlKey && (e.key === 'k' || e.key === 'K')) {
        commandPalette.classList.toggle('fade-in');
        commandPalette.classList.toggle('fade-out');
        return;
    }
})