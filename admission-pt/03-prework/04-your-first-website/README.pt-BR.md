# Sua primeira página web

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `20min`

## Objetivos de aprendizagem

- Entender o papel que o tem HTML de criar a estrutura básica de uma página web.
- Conhecer os principais elementos e tags HTML.
- Aprender a dar dinamismo a sua página usando JavaScript.
- Ter um primeiro contato com o mundo do código, criando sua primeira página
  Web.

***

O texto a seguir é uma tradução para o português, com alguns ajustes, do
capítulo 5 de [JavaScript para
crianças](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015; e de [Eloquent
JavaScript](http://braziljs.github.io/eloquente-javascript/), de Marijn
Haverbeke, 2014.

## HTML: HyperText Markup Language

O console de JavaScript que utilizamos até agora é ideal para testar pequenos
trechos de código. No entanto, para criar programas reais, precisaremos de algo
mais flexível, como uma página web. Nesta seção, você aprenderá como criar uma
página web HTML básica e acrescentar interatividade com JavaScript.

HTML (HyperText Markup Language) é a linguagem usada para criar a estrutura de
uma página web. Para criar um site, começa-se criando um documento em formato
HTML. Isso é muito parecido com criar um documento no formato Word, Excel ou
PowerPoint.

Um documento HTML simples se parece com este (não se assuste se não entender
tudo o que diz, vamos explicar passo a passo mais abaixo):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha primeira página web</title>
  </head>
  <body>
    <h1>Olá Mundo!</h1>
    <p>Esta é minha primeira página web</p>
  </body>
</html>
```

Ao abrir este mesmo documento HTML em um navegador (como o Chrome), vemos o
seguinte:

![Visualização no
Chrome](https://user-images.githubusercontent.com/25912510/37315484-fdd43c6e-2627-11e8-835d-1b7b71a7913b.png)

O navegador “lê” o arquivo HTML (o texto e as tags) e o apresenta de acordo com
as regras da linguagem. Por exemplo, o texto que está entre essas tags
`<h1> </h1>` é considerado cabeçalho, enquanto o texto entre as tags `<p> </p>`
é considerado parágrafo. Por isso, o texto _Olá Mundo!_ aparece maior do que o
texto _Esta é a minha primeira página web_.

## Criando a sua primeira página

Como já dissemos, _**a melhor maneira de aprender é botando a mão na massa**_.
Por isso, chegou o momento de criar uma página e aprender HTML por conta
própria.

A Thaissa  explicará o porquê da necessidade de um editor de texto apropriado
para resolver os exercícios:

[![Editor de texto
intro](https://i.ytimg.com/vi/3xS2fWWsAdk/0.jpg)](https://youtu.be/3xS2fWWsAdk)

No próximo vídeo a Thaissa te guiará pelos seguintes passos para que você crie a
sua primeira página:

1. Baixe o editor de texto: [Baixar](https://atom.io/). Se houver algum problema
   e não conseguir baixá-lo, tente outro editor de texto, o VS Code. Há versões
   deste para Mac e Windows. Embora a Thaissa se baseie no Atom para dar suas
   explicações, esteja ciente de que o mesmo pode ser feito através do Sublime
   Text. [Baixar o VS Code](https://code.visualstudio.com/Download)
2. Crie um documento HTML chamado `index.html`
3. Utilize algumas tags HTML no documento (como um cabeçalho e um parágrafo)
4. Salve o documento HTML
5. Abra o documento HTML em um navegador como o Chrome

Vídeo:

[![Minha primeira página
HTML](https://i.ytimg.com/vi/uIpfFSQ-b2c/0.jpg)](https://youtu.be/uIpfFSQ-b2c)

## Marcadores e elementos HTML

Os documentos HTML são compostos de `elementos`. Exceto em alguns casos (por
exemplo `<!DOCTYPE html>`), os elementos começam com um `marcador inicial` e
terminam com um `marcador final`. Por exemplo, no arquivo anterior temos o
elemento `p`, que começa com o marcador inicial `<p>` e termina com o marcador
final `</p>`. O texto entre tais tags é o _conteúdo_ do elemento `p`.

> O elemento `p` (parágrafo) como exemplo: ![Exemplo de
> tags](https://user-images.githubusercontent.com/25912510/37315511-1c0f070e-2628-11e8-8935-928fb17d6747.png)

Façamos uma breve análise de todos os elementos do nosso documento:

1. O documento começa com o marcador `<!DOCTYPE html>` (que, como vimos, não
   possui início nem fim). Sua função é indicar ao navegador que ele deve
   interpretar o nosso documento HTML segundo os padrões mais atuais da
   linguagem, distinguindo-o de arquivos que eram escritos antigamente com
   dialetos menos modernos.
2. Logo aparece o marcador inicial `<html>` (o marcador final `</ html>` fica ao
   final do documento). Por padrão, todos os documentos HTML devem conter um
   elemento `html` que “engloba” todos os outros elementos.
3. Dentro do elemento `html` há dois elementos: o `head` (cabeça, em português),
   que contém informações sobre o documento e o `body` (corpo, em português),
   que contém o documento em si.
4. Dentro do elemento `head` há o elemento `title` (com seu marcador inicial e
   final) que contém o título do documento. É por isso que, quando abrimos nosso
   arquivo HTML pelo navegador, podemos ver o texto “Minha primeira página” na
   aba da página. É importante notar que o elemento `title` está _inserido_
   dentro do elemento `head`; que por sua vez está _inserido_ dentro do elemento
   `html`.
5. Finalmente, temos o elemento `body` (com seu marcador inicial e final) que
   _engloba_ o conteúdo que irá aparecer no navegador. Neste caso, dentro de
   `body` há dois elementos adicionais: o `h1` (cabeçalho) e o `p` (parágrafo).

<!--
Una manera de visualizar este concepto de "encapsulado" donde unos elementos
"contienen" a otros es a través de este gráfico:

![HTML Jerarquía](http://apprize.info/javascript/kids/kids.files/image057.jpg)
-->

Existem muitos outros elementos e marcadores HTML, que devem ser aprendidos no
momento adequado. Por agora, é hora de voltar ao JavaScript.

<!-- ## HTML + CSS
Agrega estilos con CSS
-->

## HTML e JavaScript

É importante que você entenda que HTML _**não é**_ uma `linguagem de
programação;` é uma `linguagem de marcação`. Como vimos, o HTML nos ajuda a dar
a estrutura da nossa página. Entretanto, se quisermos atribuir _comportamento_
ou _interação_, precisaremos utilizar uma `linguagem de programação`. E a
**linguagem de programação que pode ser entendida pelos navegadores é o
JavaScript**. Com o JavaScript conseguimos fazer com que as páginas possam
responder às ações do usuário, tornando-as interativas.

Para incluir um código JavaScript em um documento HTML você pode utilizar o
elemento `script` e colocar o seu código entre os marcadores inicial
(`<script type="text/javascript">`) e final (`</script>`), tal como mostra
o seguinte exemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha primeira página</title>
  </head>
  <body>
    <h1>Olá mundo!</h1>
    <p>Esta é minha primeira página</p>

    <script type="text/javascript">
      alert('Olá mundo!');
    </script>

  </body>
</html>
```

Muitas vezes o código JavaScript pode acabar sendo muito extenso, de forma que
você não queira que este esteja inserido dentro do seu documento HTML. Assim, a
solução é criar um novo documento, desta vez com o formato JavaScript -
utilizando a extensão `.js` - e fazer a referência deste novo arquivo `.js` no
documento HTML, da seguinte maneira:

```html
<script src="nome-do-documento.js"></script>
```

O elemento `script` tem um “atributo” chamado `src` (source. Em português,
fonte), pelo qual se faz a referência de onde se encontra o seu documento
JavaScript.

## Adicionando interação à página

Agora é a sua vez! Continue seguindo os passos da Thaissa para incorporar
interação à sua página:

Os passos para prosseguir são:

1. Adicione o elemento `script` no final do elemento `body` (corpo) do documento
   HTML.
2. Dentro do mesmo arquivo HTML, entre os marcadores inicial e final do elemento
   `script`, escreva uma linha de código de JavaScript (por exemplo, algo como
   `alert()`, `document.write()` ou `prompt()`).
3. Salve seu documento HTML.
4. Atualize a página do navegador por onde está vendo o seu documento HTML.
5. Crie um novo documento chamado `app.js` na mesma pasta onde está seu
   documento HTML.
6. Adicione o atributo `src` ao elemento `script` com a referência de seu
   arquivo `app.js`.
7. Passe todo o código JavaScript do documento HTML ao documento JS.
8. Atualize a página do navegador e certifique-se de que o funcionamento da
   página é igual a como era antes.

Vídeo do Thaissa:

[![Minha primeira HTML
Web](https://embed-ssl.wistia.com/deliveries/b01097fed7f8868ca3f815a940ab9761551e3d78.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/c7dis0vp80?wvideo=c7dis0vp80)

<!--
## Sube tu página a GitHub Pages

y deplegándola en [GitHub Pages](https://pages.github.com/)
-->
