# Conta do restaurante

Imagine que você saiu para comer com as suas quatro melhores amigas
e o valor total da conta foi de 50 reais
(lembrando que você deve adicionar os 10% da taxa de serviço).
Vocês querem dividir a conta igualmente entre as cinco
e você vai criar um programa para realizar essa tarefa.

O exercício inclui um _boilerplate_ (_modelo_) que já inclui uma função
(`restaurantBill`), que receberá um _argumento_ (`bill`) com o valor total
da conta sem contar a taxa de serviço (um _número_) e se espera que o retorno
seja uma _string_ com a quantidade que deve ser paga por cada uma,
já incluindo os 10% da taxa de serviço (e incluindo, também, o símbolo de dólar).

O _boilerplate_ (_modelo_):

```js
const restaurantBill = (bill) => {
  const tax = /* ??? */

  /* ??? */

  return /* ??? */
};
```

Siga as etapas abaixo para completar a implementação da _função_
`restaurantBill`.

1. Atribua o resultado da multiplicação `bill` por `10%` à variável `tax`
   (que significa taxa/tributo em inglês). Dica: `10%` em decimal se escreve `0.1`.
2. Crie uma variável chamada `total` e atribua à ela o resultado da soma de `bill`
   mais `tax`.
3. Retorne o valor que cada uma deve pagar (`total` dividido por 5), com o
   símbolo `$` na frente (exemplo: `$11`). Dica: pode usar concatenação de
   _strings_ (ou _string literals_) para criar uma _string_ com o número e o
   símbolo `$` na frente.

Exemplo:

```js
const output = restaurantBill(50);
console.log(output); // --> '$11'
```

Boa sorte!
