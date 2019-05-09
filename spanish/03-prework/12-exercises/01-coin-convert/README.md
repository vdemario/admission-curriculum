# coinConverter

Escribe una función con el nombre `coinConverter` la cual convertirá una
cantidad de dólares a soles peruanos, pesos mexicanos y pesos chilenos.

Utiliza las tasas de cambio siguientes para ello:

1.00 dólar = 3.25 soles peruanos
1.00 dólar = 18 pesos mexicanos
1.00 dólar= 660 pesos chilenos

Ejemplo:

```js
function coinConvert(dolares) {
  soles = dolares * 3.25
  pesosMexicanos = dolares * 18
  pesosChilenos = dolares * 660
  console.log(soles, pesosMexicanos, pesosChilenos)
  // Este console.log imprimirá los resultados: 162.5, 900, 33000
}
```

¡Mucha suerte!
