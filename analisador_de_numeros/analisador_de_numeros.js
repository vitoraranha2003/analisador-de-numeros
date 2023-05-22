var numeros=[]
var numero = document.querySelector("input#num")
var tabela = document.querySelector("select#tabela")
var substituir = document.querySelector("div#substituir")
var tamanho = document.querySelector("section#tamanho")
var botao_v = document.querySelector("div#botao")
function adicionar(){
    if(numero.value==""){
        window.alert("Você não adicionou nenhum número, pois o campo estava vazio.")
    }
    else{
        if (numero.value>=1 && numero.value<=100){
            if(numeros.indexOf(numero.value)==-1){
                numeros.push(numero.value)
                var item = document.createElement("option")
                item.text = `Número ${numero.value} adicionado`
                tabela.appendChild(item)
                substituir.innerHTML=""
                tamanho.style.width="500px"
                tamanho.style.height="250px"
            }
            else{
                window.alert("ERRO! Este valor já está na lista.")
            }
        }
        else{
            window.alert("ERRO! Digite um valor entre 1 e 100.")
        }
    }
}

function finalizar(){
    if(numeros==""){
        window.alert("ERRO! Você não adicionou nenhum número.")
    }
    else{
        var maior_valor = Math.max(...numeros);
        var menor_valor = Math.min(...numeros);
        tamanho.style.width="500px"
        tamanho.style.height="500px"
        substituir.style.padding="20px"
        substituir.innerHTML = `Ao todo, temos ${numeros.length} número(s) <br> <br>`
        substituir.innerHTML += `O maior número da lista é: ${maior_valor}. <br> <br>` 
        substituir.innerHTML += `O menor número da lista é: ${menor_valor}. <br> <br>`
        var sum = 0
        for (nums of numeros){
            sum += parseInt(nums)
        }
        substituir.innerHTML += `A soma dos números dessa lista é: ${sum}. <br> <br>`
        var media= parseInt(sum)/ parseInt(numeros.length)
        substituir.innerHTML += `A média dos números dessa lista é: ${media.toFixed(2)}. <br> <br>`
        botao_v.style.visibility="visible"
    }
}

function reiniciar(){
    location.reload()
}