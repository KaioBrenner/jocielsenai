
function logar(){
    let login = document.getElementById("login").value
    let senha = document.getElementById("senha").value 

    if ( login == "admin" && senha == "1234"){
        location.href = "/acessar"
    } else {
        alert("Usuário ou senha inválida")
    }

}
