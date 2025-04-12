function exemploDeFilter() {

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let numerosFiltrados = numeros.filter(numeros => numeros > 2);
    console.log(numerosFiltrados);

}
function exemploDeFilter01() {

    const numeros = [39, 8, 12, 15, 3, 20, 7, 1, 90];

    const maioresQueDez = numeros.filter(numero => numero > 10);
    console.log(maioresQueDez);

}
function exemploDeFilter02() {

    const nomes = ["Lana", "Amanda", "Heitor", "Roberto", "Bruno", "Arthur"];

    const nomesComA = nomes.filter(nome => nome.startsWith("A"))
    console.log(nomesComA)

}
function exemploDeFilter03() {

    const produtos = [
        { nome: "Teclado", preco: 120 },
        { nome: "Mouse", preco: 40 },
        { nome: "Fone de ouvido", preco: 80 },
        { nome: "Caderno", preco: 30 }
    ];
    const produtosBaratos = produtos.filter(produto => produto.preco < 50);
    console.log(produtosBaratos);
}
function exemploDeFilter04() {

    const pessoas = [
        { nome: "Carlos", idade: 17 },
        { nome: "Mariana", idade: 22 },
        { nome: "João", idade: 15 },
        { nome: "Fernanda", idade: 30 }
    ];
    const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
    console.log(maioresDeIdade);

}

function exemploDeFind01() {

    const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];

    const amanda = nomes.find(nome => nome == "Amanda");
    console.log(amanda);

}
function exemploDeFind02() {

    const listaDeUsuarios = [
        { id: 1, nome: "Alice" },
        { id: 2, nome: "Bruno" },
        { id: 3, nome: "Carla" }
    ];
    const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);

    console.log(usuarioEncontrado);

}
function exemploDeFind03() {

    const produtos = [
        { nome: "Teclado", preco: 120 },
        { nome: "Mouse", preco: 40 },
        { nome: "Fone de ouvido", preco: 80 },
        { nome: "Caderno", preco: 30 }
    ];
    const produtoBarato = produtos.find(produto => produto.preco = 80)
    console.log(produtoBarato);

}
function exemploDeMap01() {

    const palavras = ["olá", "mundo", "javascript"];

    const enfatizadas = palavras.map(palavra => palavra + "!!!");
    console.log(enfatizadas);

}
function exemploDeMap02() {

    const nomes = ["ana", "bruno", "carla"];

    const nomesMaiusculos = nomes.map(function (nome) {
        return "Colaborador: " + nome;
    });
    console.log(nomesMaiusculos);

}