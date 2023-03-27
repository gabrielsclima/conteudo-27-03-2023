let farol = prompt("Qual a cor do farol?").toLowerCase()

switch(farol){
    case "vermelho":
        alert("Pare o carro!");
        break;
    
    case "amarelo":
        alert("Diminua a velocidade");
        break;

    case "verde":
        alert("Vai com Deus");
        break;

    default:
        alert("Cor inválida!!");
}       