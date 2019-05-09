# Cuenta de restaurante

Imagina que has salido a comer con tus cuatro mejores amigas. El monto
del consumo es de 50 dólares, pero a eso debes agregarle el 10% de Impuesto al
Valor Agregado (IVA). Quieres dividir el monto equitativamente entre las cinco.
Para eso has creado este programa.

Sigue los pasos a continuación para que completes el programa y determines
cuánto debe pagar cada una.

1. Crea una variable llamada `impuesto` y asígnale el resultado de
   multiplicar `monto` (monto del consumo) por 10%.

   > Tip: 10% en decimal se escribe 0.10

2. Crea una variable llamada `total` y asígnale el resultado de sumar `monto`
   más `impuesto`.
3. Retorna el monto que cada una debe pagar (total dividido entre 5), con el
   símbolo `$` adelante (por ejemplo: \$11).

   > Tip: debes usar string concatenation para imprimir con el símbolo \$
   > adelante.

Ejemplo:

```js
resultado = restaurantBill(50) // En este caso 50 es el monto del consumo
console.log(resultado)
// Esto imprimirá $11 el cual es el monto que cada una de las amigas debe pagar
```

¡Mucha suerte!
