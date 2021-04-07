var hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", function(){
     document.querySelector (".container").classList.toggle("show-menu");
    
});

//retorna a caixa de texto => document.querySelector("elemento seletor #id")
//.value => retorna o valor que esta na caixa de texto
//addEventListener("elemento que e escutado", função que vai ser executada quando o evento acontecer )


document.querySelector("#qtde").addEventListener("change", atualizarPreco)


document.querySelector("#js").addEventListener("change", atualizarPreco)        //tratamento de evento
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)//tratamento de evento
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)//tratamento de evento
document.querySelector("#prazo").addEventListener("change",  atualizarPrazo)
     

function atualizarPrazo () {
     const prazo = document.querySelector("#prazo").value
     if(prazo >= 2){
          document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
     }else{
          document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
     }
      atualizarPreco()
}


function atualizarPreco(){
     const qtde  = document.querySelector("#qtde").value
     const temJS = document.querySelector("#js").checked
     const incluiLayout = document.querySelector("#layout-sim").checked
     const prazo = document.querySelector("#prazo").value

     let preco = qtde * 100
     if(temJS) preco *= 1.1
     if(incluiLayout){
          preco = preco + 500
     }
     let taxaUrgencia = 1 - prazo*0.1
     preco = preco + (preco * taxaUrgencia) //preco += 1 + taxaUrgencia
     
     document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
     
} 

