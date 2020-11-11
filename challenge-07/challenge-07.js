/*
Crie um array com 5 items (tipos variados).
*/
let array = ['Guilherme', 1, {Celular: 'Iphone'}, [7,8,9], true]
console.log(array);

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
    array.push(item);
    return array;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
//console.log(addItem([function(){}, {bicicleta: 'Vermelha'}, false]))
array.push([function(){}, {bicicleta: 'Vermelha'}, false])
console.log(array)    

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
//voltar para aprender a concatenar
console.log('O segundo elemento do segundo array é ' + array[6][1] )

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+ array.length + ' itens.')

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array criado tem ' + array[6].length + ' itens.')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
let num = 10;
while(num <= 20){
    num % 2 === 0 ? console.log(num) : '';
    num++

}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
let num2 = 10;
while(num2 <= 20){
    num2 % 2 === 1? console.log(num2) : '';
    num2++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
//for(let cont = 100; cont <= 120;cont % 2 === 0? console.log(cont) : ''){
//}

//console.log( 'Números ímpares entre 111 e 125:' );
// ?