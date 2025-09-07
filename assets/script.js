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

    // --- Dynamic includes and SPA-like loader (index only) ---
    async function fetchText(path) {
        const res = await fetch(path);
        if (!res.ok) throw new Error('Fetch failed: ' + path);
        return await res.text();
    }

    // Only run dynamic template injection on index.html
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') ) {
        // load header, sidebar, footer into placeholders
        (async () => {
            try {
                const headerHtml = await fetchText('templates/header.html');
                const sidebarHtml = await fetchText('templates/sidebar.html');
                const footerHtml = await fetchText('templates/footer.html');
                document.getElementById('header-placeholder').innerHTML = headerHtml;
                document.getElementById('sidebar-placeholder').innerHTML = sidebarHtml;
                document.getElementById('footer-placeholder').innerHTML = footerHtml;

                // After injecting, re-bind toggle and close buttons
                document.querySelectorAll('.sidebar-toggle').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); toggleSidebar(); }));
                document.querySelectorAll('.sidebar-close').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); const sidebar = document.getElementById('sidebar'); if (!sidebar) return; sidebar.style.height = sidebar.scrollHeight + 'px'; requestAnimationFrame(() => { sidebar.style.height = '0px'; sidebar.classList.remove('mobile-open'); }); }));

                // Intercept sidebar links to load pages into #app-content (except login)
                document.querySelectorAll('#sidebar-placeholder a').forEach(a => {
                    const href = a.getAttribute('href');
                    if (!href) return;
                    if (href.includes('login.html')) return; // let login navigate normally
                    a.addEventListener('click', async function(e) {
                        e.preventDefault();
                        try {
                            const pageHtml = await fetchText(href);
                            // extract body inner of fetched page (simple approach)
                            const bodyStart = pageHtml.indexOf('<body');
                            const bodyEnd = pageHtml.indexOf('</body>');
                            let inner = pageHtml;
                            if (bodyStart !== -1 && bodyEnd !== -1) {
                                inner = pageHtml.slice(pageHtml.indexOf('>', bodyStart) + 1, bodyEnd);
                            }
                            document.getElementById('app-content').innerHTML = inner;
                            // re-run any needed script bindings in the loaded content
                            // (e.g., attach sidebar-toggle inside loaded page if needed)
                        } catch (err) {
                            console.error('Erro ao carregar página:', err);
                        }
                    });
                });

            } catch (err) {
                console.error('Erro ao carregar templates:', err);
            }
        })();
    }
});