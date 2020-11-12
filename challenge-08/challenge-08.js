/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(n1, n2){
  return n1 + n2
};

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var valor1 = 5;
var valor2 = 5;
console.log(`A soma de ${valor1} + ${valor2} = ${sum(valor1, valor2)}`)
/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum.name}.`)

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(){
  return 'Guilherme'
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${varShowName.name} retorna ${varShowName()}.`)

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(operador){
    return function(num1, num2){
      if(operador === '+'){
        var soma = num1 + num2
      }
      else if(operador === '-'){
        var soma = num1 - num2
      }
      else if(operador === '*'){
        var soma = num1 * num2
      }
      else if(operador === '/'){
        var soma = num1 / num2
      }
      else if(operador === '%'){
        var soma = num1 % num2
      }
      else{
        return 'operador invalido'
      }
      return `Resultado da operação: ${num1} ${operador} ${num2} = ${soma}.`
    };
    
  }
//}
console.log(calculator('.')(2,2))

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+')(6,6)

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum)

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction = calculator('-')(6,3)
var multiplication = calculator('*')(3,5)
var division = calculator('/')(6,2)
var mod = calculator('%')(3,3,)

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction)
console.log(multiplication)
console.log(division)
console.log(mod)