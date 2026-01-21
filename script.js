var nome_usuario, senha_usuario;

nome_usuario = "Tiago";
senha_usuario = "123";

if (nome_usuario === "Tiago" && senha_usuario === "123"){
    alert("Usuário logado com sucesso!");
    window.location.href = "contaBancaria.html";

}

else{
    alert("Usuário e/ou senha incorretor. Tente novamente.");
}