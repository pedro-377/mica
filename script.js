const containerSenha = document.querySelector('.password-container-containerPed');
const botaoSenha = document.getElementById('unlock-button');
const senhaInput = document.getElementById('password');
const senhaCorreta = "paçoca";

botaoSenha.addEventListener('click', () => {
    if (senhaInput.value === senhaCorreta) {
        containerSenha.classList.add('hidden');
        containerSenha.classList.remove('password-container-containerPed');
    } else {
        alert('Senha incorreta!');
        senhaInput.value = '';
        senhaInput.focus();
    }
});
