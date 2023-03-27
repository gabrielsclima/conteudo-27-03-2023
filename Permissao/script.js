let cargo = prompt("Entre com sua senha de acesso")

switch(cargo){
    case "d2023":
        document.write("Seu acesso é de diretoria!");
        break

    case "g2023":
        document.write("Seu acesso é de gerência!");
        break;

    case "s2023":
        document.write("Seu acesso é de Supervisão!");
        break;

    case "a2023":
        document.write("Seu acesso é de Assistente!");
        break;

    case "e2023":
        document.write("Seu acesso é de estagiário!");
        break;

    default:
        document.write("Senha inválida!")
}