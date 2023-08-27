alert("Sou iniciante em programação, me dá um desconto ;)");

document.addEventListener("DOMContentLoaded", function() {
    let botao = document.getElementById("botao");

    botao.addEventListener("click", function() {
        let pergunta1 = prompt("Você gostou desse site? Sim ou Não.");

            if(pergunta1 == "Sim") {
                alert("Que bom! Muito obrigado ;)");
            } else if (pergunta1 == "Não") {
                prompt("Poxa... Tudo bem, poderia me dizer o que posso melhorar?");
                alert("Muito obrigado pela sugestão");
            } else {
                alert("Resposta Inválida");
            }
        
    })
})