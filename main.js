const txtEmail = document.getElementById('txtEmail');

// se retornar true, é um email valido
// se retornar false, é um email invalido
function validateEmail(email) { // email é uma string, exemplo eu@jaison.com.br
    // verificar se o email possui exatamente 1 simbolo de arroba
    const arroba = email.split('@');
    
    if (arroba.length !== 2 || arroba[0] == '' || arroba[1] == '') {
        return false;
    }

    return true;
}

txtEmail.addEventListener('focus', function(){
    console.log('Entrou no campo de email');
});

txtEmail.addEventListener('blur', function(){
    console.log('Saiu do campo de e-mail');

    // Caso o usuario nao digite nada mostrar uma mensagem de campo obrigatório
    if (!validateEmail(txtEmail.value.trim())) {
        txtEmail.classList.add('error');
    }
});