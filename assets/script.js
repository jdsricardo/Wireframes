// Script básico para a Rede Uniasselvi

// Função para validar login
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        alert('Login realizado com sucesso!');
        window.location.href = '../../index.html'; // Redirecionar para dashboard
    } else {
        alert('Preencha todos os campos.');
    }
}

// Adicionar event listener ao formulário de login se existir
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateLogin();
        });
    }

    // Função para curtir posts
    document.querySelectorAll('.btn-outline-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            this.textContent = 'Curtido';
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-primary');
        });
    });
});