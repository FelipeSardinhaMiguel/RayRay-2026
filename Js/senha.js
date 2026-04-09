function parabens()
{
    let senha = document.getElementById("senha").value;

    if (senha.toLowerCase() == "harry potter") {
        window.location.href="parabens.html";
    }
    //else tocar audio de erro
}

function senha2()
{
    let senha = document.getElementById("ovoPascoa").value;

    if (senha.toLowerCase() == "harry potter") {
        window.location.href="bonus.html";
    }
    //else tocar audio de erro
}

function caixaDica(){
    const botaoDica = document.querySelector(".dicaBtn");
    const dicaCaixa = document.getElementById("dicaCaixa");

    let exibicao;

    botaoDica.addEventListener("click", () => {
        dicaCaixa.style.display = "block";

        //limpa caso clique varias vezes
        clearTimeout(exibicao);

        exibicao = setTimeout(() => {
            dicaCaixa.style.display = "none";
        }, 5000); //cinco segundos
    });
}