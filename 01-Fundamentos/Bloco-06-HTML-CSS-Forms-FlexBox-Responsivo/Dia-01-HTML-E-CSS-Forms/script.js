const buttonEnv = document.getElementById('btn');

buttonEnv.addEventListener('click', function (event){

  event.preventDefault();
});

function enableSubmit() {
    const submitBtn = document.querySelector('#btn');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
    
  }
  agreement.addEventListener('change', enableSubmit);

  // Limitando Caracteres

function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#fullName').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#why').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }

function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }
  