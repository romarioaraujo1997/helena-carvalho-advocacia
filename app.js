
const WHATSAPP_NUMBER = '5585997134248'; 
const WHATSAPP_MESSAGE = 'Olá, gostaria de agendar uma consulta com a Dra. Helena Carvalho. Visitei o site e busco auxílio jurídico.';


document.getElementById('year').textContent = new Date().getFullYear();


function handleContactSubmit(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Preencha todos os campos.');
    return false;
  }


  const subject = encodeURIComponent('Contato via site — ' + nome);
  const body = encodeURIComponent('Nome: ' + nome + '\nEmail: ' + email + '\n\n' + mensagem);
  window.location.href = `mailto:contato@helenacarvalho.adv.br?subject=${subject}&body=${body}`;

  return false;
}


function handleWhatsappClick() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  
  window.open(whatsappUrl, '_blank');

  return false; 
}


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