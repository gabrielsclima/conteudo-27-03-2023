let donalds = prompt("Qual será o combo: ").toLowerCase();

switch(donalds){
    case "1":
        document.write("Combo simples <br>");
        document.write("Preço: R$ 14.99 <br>");
        document.write(`
            - 2 Esfihas de carne;<br>
            - 1 Guaraná Antártica;<br>
            - 1 porção de batata pequena;<br>
            `)
        break;

    case "2":
        document.write("Refeição <br>");
        document.write("Preço: R$ 24.99 <br>");
        document.write(`
            - 2 fatias de torta de frango;<br>
            - 1 suco de laranja (refil);<br>
            - 1 porção de batata média;<br>
            `)
        break;
    
    case "3":
        document.write("3 amigos <br>");
        document.write("Preço: R$ 14.99 <br>");
        document.write(`
            - Balde de batata frita<br>;
            - 3 Cheese Burgers<br>;
            - Guaraná Antártica 1,5L<br>;
            `)
        break;
    
    case "4":
        document.write("Combo Guloso");
        document.write("Preço: R$ 14.99 <br>");
        document.write(`
            - 2 Esfihas de carne;<br>
            - 1 Guaraná Antártica;<br>
            - 1 porção de batata pequena;<br>
            `)
        break;
    
    default:
        document.write("Opção inválida");
}