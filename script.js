const themeButton = document.querySelector('#theme-toggle');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const theme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
});
