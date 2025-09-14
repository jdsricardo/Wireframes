// Script básico para a Rede Uniasselvi

// Função para validar login
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Credenciais de teste (aceita duas variantes do email de exemplo)
    if ((email === 'teste@teste.com' || email === 'test@teste.com') && password === 'teste') {
        // Redirecionar para dashboard (relativo a pages/*)
        window.location.href = '../../index.html';
        return;
    }

    if (email && password) {
        alert('Credenciais inválidas para o modo de teste. Use teste@teste.com / teste');
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

    // Toggle da sidebar
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mobileBreakpoint = 768;
        if (window.innerWidth <= mobileBreakpoint) {
            // comportamento vertical para mobile: abre/fecha de cima para baixo
            if (!sidebar) return;
            const isOpen = sidebar.classList.contains('mobile-open');
            if (isOpen) {
                // fechar animado: definir height 0
                sidebar.style.height = sidebar.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    sidebar.style.height = '0px';
                    sidebar.classList.remove('mobile-open');
                });
            } else {
                // abrir: medir conteúdo e animar height
                sidebar.classList.add('mobile-open');
                const targetHeight = sidebar.scrollHeight;
                sidebar.style.height = '0px';
                requestAnimationFrame(() => {
                    sidebar.style.height = targetHeight + 'px';
                });
            }
            // garantir que a classe de collapse lateral não interfira
            document.body.classList.remove('sidebar-collapsed');
            if (sidebar) sidebar.classList.remove('collapsed');
        } else {
            // comportamento lateral para desktop: recolher/expandir lateralmente
            document.body.classList.toggle('sidebar-collapsed');
            if (sidebar) sidebar.classList.toggle('collapsed');
            // garantir que mobile-open não fique habilitado
            if (sidebar) sidebar.classList.remove('mobile-open');
        }
    }

    // Conectar botão(s) toggle (pode haver mais de um em páginas diferentes)
    document.querySelectorAll('.sidebar-toggle').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSidebar();
        });
    });

    // Conectar botão de fechar interno (mobile)
    document.querySelectorAll('.sidebar-close').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const sidebar = document.getElementById('sidebar');
            if (!sidebar) return;
            // fechar animado
            sidebar.style.height = sidebar.scrollHeight + 'px';
            requestAnimationFrame(() => {
                sidebar.style.height = '0px';
                sidebar.classList.remove('mobile-open');
            });
        });
    });

    // --- Dynamic includes removed - using inline elements now ---
});