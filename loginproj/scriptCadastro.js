document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('maill');
    var senha = document.getElementById('pass');
    var loginButton = document.getElementById('button');
    var user = document.getElementById('nomeuser');

    function verificarCredenciais() {
        if (!email.value || !senha.value || !user.value) {
            alert('Por favor, forneça um email, uma senha e um nome de usuário.');
            return false;
        }

        // var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value)) {
            alert('Por favor, forneça um email válido.');
            return false;
        }

        // var regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regexSenha.test(senha.value)) {
            alert('Por favor, forneça uma senha válida.');
            return false;
        }

        return true;
    }

    loginButton.addEventListener('click', function () {
        if (verificarCredenciais()) {
            alert("Login Bem Sucedido!");
        }
    });
});


  