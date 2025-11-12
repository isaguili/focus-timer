let lightMode = true

const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('dark')

    //acessibilidade do sr-only
    const mode = lightMode ? 'dark mode' : 'light mode'
    event.currentTarget
        .querySelector('span').textContent = `${mode} ativado`
    lightMode = !lightMode
})

