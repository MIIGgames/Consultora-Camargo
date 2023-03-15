// Validação do formulário
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  let errorMessage = '';
  
  if (!nameInput.value) {
    errorMessage += 'Por favor, digite seu nome.\n';
  }
  
  if (!emailInput.value) {
    errorMessage += 'Por favor, digite seu email.\n';
  }
  
  if (!phoneInput.value) {
    errorMessage += 'Por favor, digite seu telefone.\n';
  }
  
  if (!messageInput.value) {
    errorMessage += 'Por favor, digite sua mensagem.\n';
  }
  
  if (errorMessage) {
    alert(errorMessage);
    event.preventDefault();
  }
});