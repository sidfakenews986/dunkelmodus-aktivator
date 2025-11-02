const toggleButton = document.getElementById('toggleButton');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    toggleButton.textContent = isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode';
});