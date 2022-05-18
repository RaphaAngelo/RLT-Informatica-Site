const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const assunto = document.getElementById('assunto');
const mensagem= document.getElementById('mensagem');
const botao_form = document.getElementById('botao_form');

console.log(nome)


botao_form.addEventListener('click', () => {
    if(nome.value == "" ) {
      alert('Digite seu nome.');
      return false;
    }
    
    if(email.value == "" ) {
      alert('Digite seu e-mail.');
      return false;
    }
  
    if(telefone.value == "" ) {
      alert('Digite seu numero de telefone.');
      return false;
    }
  
    if(assunto.value == "" ) {
      alert('Comente aqui o seu problema.');
      return false;
    }
  
    if(mensagem.value == "" ) {
      alert('Descreva o seu problema em mais detalhes.');
      return false;
    }else{
        alert('Obrigado! Em breve nossa equipe entrará em contato!')
      }
    
  
  });


