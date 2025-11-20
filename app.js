// app.js (COMPLETO)

// 1. Atualiza o ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Função para lidar com o envio do formulário de contato (Envia para email)
function handleContactSubmit(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Preencha todos os campos.');
    return false;
  }

  // Monta o link mailto
  const subject = encodeURIComponent('Contato via site — ' + nome);
  const body = encodeURIComponent('Nome: ' + nome + '\nEmail: ' + email + '\n\n' + mensagem);
  window.location.href = `mailto:contato@helenacarvalho.adv.br?subject=${subject}&body=${body}`;

  return false;
}

// 3. Script para rolagem suave (Smooth Scrolling)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (ev) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      ev.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      el.setAttribute('tabindex', '-1');
      el.focus();
    }
  });
});