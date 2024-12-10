document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.className = currentTheme;
    themeSwitch.checked = currentTheme === 'dark-mode';

    // Toggle theme
    themeSwitch.addEventListener('change', () => {
        const newTheme = themeSwitch.checked ? 'dark-mode' : 'light-mode';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });
});
