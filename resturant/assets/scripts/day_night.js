// DAy night mode
const getStoredTheme = () => localStorage.getItem('theme')
const setStoredTheme = theme => localStorage.setItem('theme', theme)

const setTheme = theme => {
  if (theme === 'auto') {
    const u = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    document.documentElement.setAttribute('data-bs-theme', u)
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }
}

const updateTheme = () => {
  setTheme(getStoredTheme() || 'auto')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)

document.querySelector('.toggle-switch-dark').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
  setStoredTheme(next)
  setTheme(next)
})

updateTheme()


if(document.documentElement.getAttribute('data-bs-theme') === 'light') {
  document.querySelector('.toggle-switch-dark').checked = true;
}

// end DAy night mode


// Space div


  document.querySelectorAll('.space-between').forEach(el => {
    const space = el.getAttribute('data-space');
    if (space) {
      el.style.height = `${space}px`;
    }
  });

// end Space div
