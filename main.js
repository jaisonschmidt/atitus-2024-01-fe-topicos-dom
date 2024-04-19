const txtEmail = document.getElementById('txtEmail');

// se retornar true, é um email valido
// se retornar false, é um email invalido
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

txtEmail.addEventListener('focus', function(){
    console.log('Entrou no campo de email');
});

txtEmail.addEventListener('blur', function(){
    console.log('Saiu do campo de e-mail');

    // Caso o usuario nao digite nada mostrar uma mensagem de campo obrigatório
    if (!validateEmail(txtEmail.value.trim())) {
        txtEmail.classList.remove('success');
        txtEmail.classList.add('error');
    } else {
        txtEmail.classList.remove('error');
        txtEmail.classList.add('success');
    }
});