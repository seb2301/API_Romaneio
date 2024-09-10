document.addEventListener("DOMContentLoaded", function() {
    // Função para lidar com o redirecionamento de botões
    const loginFuncionarioButton = document.querySelector(".login-button[href='login-funcionario.html']");
    const loginTerceirizadoButton = document.querySelector(".login-button[href='login-terceirizado.html']");

    loginFuncionarioButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        window.location.href = 'login-funcionario.html'; // Redireciona para a página de login do funcionário interno
    });

    loginTerceirizadoButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        window.location.href = 'login-terceirizado.html'; // Redireciona para a página de login do funcionário terceirizado
    });

    // Validação do formulário de login
    const loginForm = document.querySelector("form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            const matriculaInput = document.getElementById("matricula");
            const senhaInput = document.getElementById("senha");

            if (!matriculaInput.value || !senhaInput.value) {
                alert("Por favor, preencha todos os campos.");
                event.preventDefault(); // Impede o envio do formulário se houver campos vazios
            }
        });
    }
});
