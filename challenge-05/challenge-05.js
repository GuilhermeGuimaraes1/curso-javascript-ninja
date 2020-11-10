/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let array = [5,8,9,"Guilherme", "Carro"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2( array, a){
    return array[ a ];
}

console.log(myFunction2([1,2,5,8],0))

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let vari = [true, 'Gui', 5, null, false]
console.log(vari)

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(vari, 0 ))
console.log(myFunction2(vari, 1 ))
console.log(myFunction2(vari, 2 ))
console.log(myFunction2(vari, 3 ))
console.log(myFunction2(vari, 4 ))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){

    let todosLivros = {
        'Pitu': {
            qtdPaginas: 150,
            autor: "Machado de Assis",
            editora: "saraiva"
        },
        'O sertanejo': {
            qtdPaginas: 500,
            autor: "Guimarães Rosa",
            editora: "Viva"
        },
        'Contos': {
            qtdPaginas: 100,
            autor: "Clarice",
            editora: "Morrinhos"
        }
    }

    return !nomeLivro ? todosLivros : todosLivros [ nomeLivro]

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let nomeLivro = 'Pitu'
console.log(`O livro tem ${book(nomeLivro).qtdPaginas} paginas`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do Livro ${book(nomeLivro).autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${book('Contos')} foi publicado pela editora ${book('Contos').editora}`)
