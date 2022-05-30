/*=============== THEME DARK/LIGHT ===============*/ 
const buttonTheme = document.getElementById('button-theme');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Tema/Icon selecionado anteriormente
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Verifica se o tema atual é o light, se verdadeiro ele vai para o dark, se não ele vai para o light.
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
// Verifica se o icone atual é o sol, se verdadeiro ele muda para lua, se não ele muda para o sol.
const getCurrentIcon = () => buttonTheme.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// Validamos se o usuário já escolheu um tópico
if (selectedTheme) {
  // Se a validação for cumprida, perguntamos o que foi selecionado para saber se ativamos ou desativamos o modo dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  buttonTheme.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Ativa/desativa o tema manualmente com o botão
buttonTheme.addEventListener('click', () => {
    // Alterna entre o tema/icone dark e light
    document.body.classList.toggle(lightTheme);
    buttonTheme.classList.toggle(iconTheme);
    // Salva o tema e o icone atual
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
