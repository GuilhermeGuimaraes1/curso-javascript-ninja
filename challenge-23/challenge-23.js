(function(win, doc){

  'use strict';

  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  let $visor = doc.querySelector('[data-js="visor"]'); // pegou o imput do html
  let $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]'); // pegou todos os botões de números no html
  let $buttonOperations = doc.querySelectorAll('[data-js="button-operation"]'); // pegou todos os botões de operação
  let $buttonCE = doc.querySelector('[data-js="button-ce"]'); //botão ce
  let $buttonEqual = doc.querySelector('[data-js="button-equal"]'); //botão igual

  //adicionando o evento de click nos numeros
  Array.prototype.forEach.call($buttonsNumbers, function(button){  //pega todos os botões e faz um interação entre eles.
    button.addEventListener('click', handleClickNumb, false); // passa o envento para toda vez que o botão for clicado.
  });

  //Adicionando o evento de click nas operações
  Array.prototype.forEach.call($buttonOperations, function(button){
    button.addEventListener('click', handleClickOp,false);
  });

  $buttonCE.addEventListener('click', handleClickCE, false);

  $buttonEqual.addEventListener('click', handleClickEqual, false);

  //faz a concatenção dos botoes clicados
  function handleClickNumb(){ //função que diz o que vai ser feito quando clicar o botão
    $visor.value += this.value;
  }

  //zera quando clica no botão CE
  function handleClickCE(){
    $visor.value = 0;
  }

  function handleClickOp(){
    $visor.value =  removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value
  }

  function isLastItemAnOperation(number){
    let operations = ['+', '-', 'x', '÷'];
    let lastItem = number.split('').pop();
    return operations.some(function(operator){
      return operator === lastItem;
    })
  }

  function removeLastItemIfItIsAnOperator(number){
    if(isLastItemAnOperation(number)){
      return number.slice(0, -1);
    }
    return number
  }

  function handleClickEqual(){
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    let allValues = $visor.value.match(/\d+[+x÷-]?/g);//regex pegar todos os numeros que tem acompanhado as operações
    let result = allValues.reduce(function(accumulated, actual){
      let firstValue = accumulated.slice(0,-1);
      let operator = accumulated.split('').pop();
      let lastValue = removeLastItemIfItIsAnOperator(actual);
      let lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
      switch(operator){
        case '+':
          return ( Number (firstValue) + Number(lastValue) ) + lastOperator;
        case '-':
          return ( Number (firstValue) - Number(lastValue) ) + lastOperator;
        case 'x':
          return ( Number (firstValue) * Number(lastValue) ) + lastOperator;
        case '÷':
          return ( Number (firstValue) / Number(lastValue) ) + lastOperator;
      }
    });
    $visor.value = result;
  }

})(window, document);
