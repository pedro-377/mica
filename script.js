const containerSenha = document.querySelector('.password-container-containerPed');
const botaoSenha = document.getElementById('unlock-button');
const senhaInput = document.getElementById('password');
let senha = "paçoca";

botaoSenha.addEventListener('click', function() {
    togglePasswordVisibility();
});

function togglePasswordVisibility() {
    if (senhaInput.value === senha) {
        containerSenha.classList.add('hidden');
        containerSenha.classList.remove('password-container-container');
    } else {
        alert('Senha incorreta!');
    }
}