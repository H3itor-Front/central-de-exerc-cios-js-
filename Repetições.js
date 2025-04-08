function exemploFor() {
    
//for
//1o = declarar o contador.
//2o = condição (enquanto)
//3o = incremento
    for (let contador = 1; contador <= 5; contador++) {

        alert(contador);

    }

}

function exemploWhile() {

    let contador = 1;

    while (contador <= 5) {

        console.log(contador);
        contador++

    }

}
function exemploDoWhile() {

    let contador = 1

    do {

        alert(contador);
        contador++

    } while (contador <= 5);

}

exemploDoWhile()