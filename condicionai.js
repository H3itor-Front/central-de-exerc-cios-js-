function exercicio01() {

    debugger;

    let numero = prompt("Digite um numero: ")

    if (numero > 0) {

        alert("Positivo")

    } else {

        if ("numero < 0") {

            alert("Negativo")

        } else {

            alert("É zero.")

        }

    }

}

gerarlog("Exercicio de maioridade executado ás " + new Date().toLocaleDateString())

function exercicio02() {

    let idade = prompt("Digite sua idade:  ");

    if (idade >= 18) {

        alert("Você é maior de idade.");

    } else {

        alert("você é menor de idade.");

    }

}

function exercicio03() {

    let numero = prompt("Insira um numero: ");

    if (numero % 2 == 0) {

        alert("seu numero é par")

    } else {

        alert("seu numero é ímpar")

    }

}

function exercicio04() {

    let Nota = prompt("Digite a nota do aluno: ");

    if (Nota >= 60) {

        alert("você passou de ano");

    } else {

        alert("você reprovou de ano");

    }
}

function exercicio05() {

    let Numero = prompt("Digite um Numero: ");

    if (Numero > 0) {

        alert("Numero Posotivo")

    } else {

        alert("Numero Negativo")

    }
}

function Exercicio06() {

    let idade = prompt("Digite sua idade:");

    if (idade >= 0 && idade <= 12) {

        alert("Você é uma Criança");

    } else

        if (idade >= 13 && idade <= 17) {

            alert("Você é um Adolescente");

        } else

            if (idade >= 18) {

                alert("Você é um Adulto");

            } else {

                alert("Idade inválida");

            }
}
function intermediario01() {


    let num2 = parseFloat(prompt("Digite o segundo número:"));

    let operacao = prompt("Digite a operação (+, -, *, /):");

    let resultado;

    if (operacao === "+") {

        resultado = num1 + num2;

    } else

        if (operacao === "-") {

            resultado = num1 - num2;

        } else

            if (operacao === "*") {

                resultado = num1 * num2;

            } else

                if (operacao === "/") {

                    if (num2 !== 0) {
                        resultado = num1 / num2;
                    } else {

                        resultado = "Erro: Divisão por zero";
                    }
                } else {

                    resultado = "Operação inválida";
                }

    alert("Resultado: " + resultado);

}
function intermediario02() {

    let num1 = prompt("Digite o primeiro numero: ");

    let num2 = prompt("Digite o segundo numero: ");

    let num3 = prompt("Digite o terceiro numero: ");


    if (num1 >= num2 && num1 >= num3) {

        alert("Seu primeiro número é o maior");

    } else {

        alert("Seu primeiro número é o menor");

    }

    if (num2 >= num1 && num2 >= num3) {

        alert("Seu segundo número é o maior");

    } else {

        alert("Seu segundo número é o menor");

    }

    if (num3 >= num1 && num3 >= num2) {

        alert("Seu terceiro número é o maior");

    } else {

        alert("Seu terceiro número é o menor");

    }
}
function intermediario03() {
    let Preço = prompt("Insira o Preço da compra: ");

    if (Preço >= 100) {

        alert("Sua conta teve 10% de desconto");

    } else {

        alert("Sua conta não teve 10% de desconto");
    }
}

function gerarlog(textoDoLog) {

    let logoContainer = document.querySelector(".logo-container");

    let paragraph = document.createElement("P");

    paragraph.innerHTML = textoDoLog;

    logoContainer.appendChild(paragraph);

}