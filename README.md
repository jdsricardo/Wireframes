# Rede Uniasselvi — Wireframes e Escopo Inicial

Este repositório contém os wireframes e arquivos estáticos (HTML, CSS, JS e imagens) para a proposta inicial da Rede Uniasselvi — uma rede social universitária focada em comunicação, colaboração e engajamento estudantil.

## Visão geral

O escopo da rede social universitária foi definido considerando as necessidades específicas do ambiente acadêmico, com foco em promover a comunicação, a colaboração e o engajamento estudantil. A aplicação será desenvolvida em módulos, permitindo evoluir gradualmente e manter flexibilidade para futuras expansões.

## Requisitos Iniciais

### Requisitos Funcionais

| ID  | Requisito |
|-----|-----------|
| RF-01 | Perfis de Usuários: cadastro e edição de informações pessoais e acadêmicas (curso, período, disciplinas). |
| RF-02 | Upload de foto e personalização do perfil. |
| RF-03 | Exibição de histórico de atividades dentro da plataforma (postagens, grupos, eventos). |
| RF-04 | Configurações de privacidade (controle de quem pode visualizar informações). |
| RF-05 | Feed de Notícias: publicação de textos, imagens, vídeos e links. |
| RF-06 | Interações no feed: curtidas, comentários e compartilhamentos internos. |
| RF-07 | Algoritmo de relevância baseado em interações e interesses acadêmicos (futuro). |
| RF-08 | Seguir usuários, grupos e eventos para personalizar o feed. |
| RF-09 | Grupos de Estudo: criação e gerenciamento de grupos (abertos, fechados, privados). |
| RF-10 | Compartilhamento de materiais (PDFs, apresentações, links). |
| RF-11 | Espaço de fórum para debates e perguntas. |
| RF-12 | Subgrupos para disciplinas/projetos. |
| RF-13 | Eventos: calendário, inscrições, lembretes e gerenciamento. |
| RF-14 | Mensagens e Comunicação: chat individual e em grupo, envio de arquivos e indicadores de presença/online. |
| RF-15 | Notificações: alertas sobre novas postagens, mensagens, eventos e convites. |
| RF-16 | Gamificação: pontos, badges, rankings e conquistas. |
| RF-17 | Busca e Descoberta: busca por usuários, disciplinas, grupos e eventos, sugestões automáticas. |
| RF-18 | Moderação e Segurança: sistema de denúncias, bloqueio e políticas de revisão. |

### Requisitos Não Funcionais

- Escalabilidade: suporte inicial para 5.000 usuários ativos com possibilidade de expansão.
- Segurança: criptografia de dados em trânsito (TLS) e em repouso; conformidade com a LGPD.
- Usabilidade: design responsivo (mobile-first) e compatível com padrões de acessibilidade (WCAG).
- Desempenho: tempo de resposta inferior a 2s para 95% das requisições.
- Disponibilidade: SLA mínimo de 99% em produção.
- Compatibilidade: suportar Chrome, Firefox e Edge, além de dispositivos móveis Android e iOS.
- Manutenção: código modular e documentado.

## Limitações do Escopo (versão inicial)

- Não haverá integrações externas (Facebook, Instagram, LinkedIn) na primeira versão.
- Certificados digitais e integrações com sistemas acadêmicos ficarão para versões futuras.
- Recursos avançados de IA para recomendação não serão contemplados inicialmente.

## Abordagens Técnicas Sugeridas

- Arquitetura: Cliente-Servidor com front-end em HTML/CSS/JS (possibilidade de migrar para React) e backend em Node.js + Express.
- Banco de Dados: PostgreSQL.
- Autenticação: JWT para APIs.
- Hospedagem: Firebase / Google Cloud (Free Tier) como alternativa inicial.

## Como usar este repositório (rápido)

- Abra `index.html` no navegador para ver o dashboard.
- As páginas das funcionalidades estão em `templates/pages/`.
- Arquivos estáticos (CSS/JS/Imagens) estão em `assets/`.

## Notas sobre o wireframe e testes rápidos incluídos

- Foi implementado um botão toggle da sidebar (no header) que recolhe/expande a sidebar via JavaScript e classes CSS.
- A página de login (`templates/pages/login.html`) possui um card centralizado verticalmente para testes.
- O login falso aceito para testes é: `test@teste.com` / `teste` e redireciona para `index.html`.

---

Para dúvidas ou próximos passos (ex.: criar API mock, implementar autenticação real, migrar para React), abra uma issue ou solicite alterações.
