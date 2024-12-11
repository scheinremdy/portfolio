
document.addEventListener('DOMContentLoaded', () => {
    const darkModeSwitch = document.querySelector('#dark-mode-toggle');
    
    darkModeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
