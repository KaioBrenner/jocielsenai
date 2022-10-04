let bancoUsuarios = []


function validarUsuario(nome,usuario, email, senha,){

        let novoUsuario = {
            nome: nome,
            usuario: usuario,
            email: email,
            senha: senha,
        }

    if (bancoUsuarios.length == 0) {
        bancoUsuarios.push(novoUsuario)
        return alert(" Usuario Cadastrado com Sucesso")

    } else {
        for (let i in bancoUsuarios) {
            if ( bancoUsuarios[i].usuario == usuario) { 
                return alert("Nome de usuário já existe! \n Usuário não cadastrado.")
            } else if (bancoUsuarios[i].email == email ) {
                return alert("Email já existe! \n Usuário não cadastrado.")
            }
        }

        bancoUsuarios.push(novoUsuario)
        return alert(" Usuario Cadastrado com Sucesso")

        }
    }

function cadastrar(){

    let nome  = document.getElementById("nome").value
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    validarUsuario( nome, usuario, email, senha)

    document.getElementById("nome").value = ""
    document.getElementById("usuario").value = ""
    document.getElementById("email").value = ""
    document.getElementById("senha").value =""
}


    console.log("------------------")
    console.log("lista de usuarios")
    console.log("------------------")
    console.log(bancoUsuarios)
