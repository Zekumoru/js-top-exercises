const themeName = document.querySelector('.theme-name');
const themeNameReverse = document.querySelector('.theme-name-reverse');

function toggleTheme() {
  if (document.documentElement.className === 'light') {
    toDarkMode();
    return;
  }

  toLightMode();
}

function toLightMode() {
  document.documentElement.className = 'light';
  themeName.textContent = 'light';
  themeNameReverse.textContent = 'dark';
}

function toDarkMode() {
  document.documentElement.className = 'dark';
  themeName.textContent = 'dark';
  themeNameReverse.textContent = 'light';
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toDarkMode();
}
else {
  toLightMode();
}