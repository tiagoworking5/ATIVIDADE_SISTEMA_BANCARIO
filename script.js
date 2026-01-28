
function entrarPagina() {
    var nome_usuario, senha_usuario;

    nome_usuario = document.getElementById('usuario').value;
    senha_usuario = document.getElementById('senha').value;

    if (nome_usuario === "tiago" && senha_usuario === "123") {
        alert("Usuário logado com sucesso!");
        window.location.href = "contaBancaria.html";

    }

    else {
        alert("Usuário e/ou senha incorreto. Tente novamente.");
    }

}