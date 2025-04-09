// function exerciciosDeRepetição01() {
    
//     let i = 1;
//     do {
//         alert(i);
//         i++;
//     } while (i <= 10);

//  }
//  function exerciciosDeRepetição02() {
  
//     let numero = prompt("Digite um número para ver a tabuada:");

// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// console.log("Fim da tabuada.");

//  }

// function exerciciosDeRepetição03() {

//     let N = prompt("Digite um numero N: ");

//  let soma = 0;
    
//  let i = 1;

//     while (i <= N) {
//         soma += i;
//         i++;
        
//     }

//     console.log("A soma dos números de 1 até " + N + " é: " + soma);

// }

// function exerciciosDeRepetiçãoIntermediario01() {

//     for (let i = 2; i <= 50; i += 2) {
//         console.log(i);
//     }
    
// }

function exerciciosDeRepetiçãoIntermediario02() {

    let numero = prompt("Digite um numero aleatorio: ");
    let numero02 = prompt("Digite um segundo numero aleatorio: ");
    let numero03 = prompt("Digite um terceiro numero aleatorio: ");

    if (numero > numero02 && numero > numero03) {

        alert("o primeiro numero é o maior")

    } else {

        if (numero02 > numero && numero02 > numero03) {

            alert("o segundo numero é o maior")
        } else {

            if (numero03 > numero && numero03 > numero02) {

                alert("o terceir numero é o maior")

            }

        }

    }

}
exerciciosDeRepetiçãoIntermediario02()