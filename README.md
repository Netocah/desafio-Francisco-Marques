# desafio-Francisco-Marques
  Para realizar este desafio, precisei estudar JavaScript, uma vez que a linguagem que utilizo é JAVA. Recomendo que use um escopo de projeto ou um fluxograma da aplicação feita no papel para que você não se enrole na hora de escrever o código.
  Deixarei aqui registrado o meu estudo dos métodos e funções do Java Script. fonte:(https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  No passo a passo, primeiro realizamos a definição do menu com uma array[codigo1:preço...codigon:preçon] e uma array com os extras para aplicarmos as regras adicionais que exludem a validade do pedido.
  Com as duas listas, criamos o método calcularValorDaCompra(metodoDePagamento, itens) onde itens recebe uma array dos itens que serão comprados. Cada item é uma string contendo o código do item e a quantidade do mesmo separados por uma vírgula.
  Dentro do método verificamos primeiro todas as condições de exclusão da validade do pedido, depois usamos um loop 'for..of' para separar item de quantidade, depois incrementamos os valores em uma variavel 'total'
  Em seguida aplicamos as taxas ou descontos e retornamos o valor do pedido com duas casas decimais usando o metodo toFixed.
  O código está todo comentado para mais informações.
  
##ARRAYS
	Arrays são um tipo especial de objetos em JS.
	O tipo de operador em JavaScript retorna "objeto" para arrays, Mas os arrays de JavaScript são melhor descritos como arrays.
	Arrays usam números para acessar seus "elementos". Neste exemplo, a pessoa[0] retorna Carlos:

	EX: var pessoa = [ "Carlos", "Silva", 46 ];
    	//console.log(pessoa[0]) - imprime no console: "Carlos"

	Os objetos usam nomes para acessar seus "membros". Neste exemplo, pessoa.primeiroNome retorna Carlos:

	EX: var pessoa = {primeiroNome:"Carlos", lastName:"Silva", age:46};
    	//console.log(pessoa.primeiroNome) - imprime no console: "Carlos"

	* Uso de array.includes(searchElement, fromIndex) (Tipo de retorno: boolean[true, false])
		searchElement = O elemento que deseja procurar dentro da array.
		fromIndex = Opcional. A posição no array de onde a busca pelo searchElement se iniciará. Por padrão, 0.
	EX: 	[1, 2, 3].includes(2); // true
		[1, 2, 3].includes(4); // false
		[1, 2, 3].includes(3, 3); // false
		[1, 2, 3].includes(3, -1); // true
		[1, 2, NaN].includes(NaN); // true

##LET
	'let' permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.
	Isso é inverso da keyword 'var', que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do
	escopo de bloco.
	Nota: o trecho acima: "independentemente do escopo de bloco", na verdade, significa dizer que variáveis declaradas dentro de blocos
	internos da função, por exemplo, são vinculadas no escopo da função, não no bloco no qual elas são declaradas. Se isso parece confuso
	,apenas entenda que, ao contrário do que se poderia supor, em Javascript blocos não possuem escopo como em outras linguagens, somente
	funções têm! Isso quer dizer que mesmo uma váriavel definida com a keyword 'var' dentro de um bloco de instrução 'if', será visível
	no resto inteiro da função.
	* Redeclaração de uma mesma variável num mesmo escopo de bloco causa um TypeError.
	Sintaxe: 
		-Definição let:
			let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];
		-Expressão let:
			let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) expression;
		-Instrução let:
			let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) statement;

##FOR ...OF
	O loop for...of percorre objetos iterativos (en-US) (incluindo Array, Map, Set, o objeto arguments (en-US) e assim por diante),
	chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
	
	Sintaxe: for (variavel of iteravel) {
  			declaração
		 }
	* Iterando um Map	
		let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

		for (let entry of iterable) {
		  console.log(entry);
		}
		// [a, 1]
		// [b, 2]
		// [c, 3]

		for (let [key, value] of iterable) {
  		console.log(value);
		}
		// 1
		// 2
		// 3

##SPLIT
	O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
	A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
	Sintaxe: str.split([separator[, limit]])
	Parâmetros
		O caso mais simples é quando o separador é apenas um único caractere que será usado para dividir a string. Por exemplo, 
		uma string contendo valores separados por tabulação (TSV) poderia ser analisada passando um caractere de tabulação como
		separador, como este: myString.split ("\ t").
		Se o separator contiver vários caracteres, toda a sequência de caracteres deve ser encontrada para ser dividida.
		Se o separator for omitido ou não aparecer dentro da str, o array retornará um elemento consistindo em toda a string.
		Se o separator aparecer no início (ou no final) da string, ele ainda terá o efeito de divisão. O resultado é uma string
		vazia (ou seja, str.length == 0), que aparece na primeira (ou última) posição do array retornado.
		Se o separator for uma string vazia (""), str será convertido em um array contendo cada um de seus caracteres em UTF-16.

##NUMBER()
	O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar com valores numéricos. Um objeto Number é criado 
	utilizando o construtor Number().
	Os principais usos para o objeto Number são:

		- Se o objeto não pode ser convertido para um número, é retornado NaN.
		- Fora do contexo de um construtor. Ex: Sem o operador new, Number pode ser utilizado para realizar uma conversão de tipo.
	No contexto desta aplicação, Number() está sendo usado para converter a string de quantidade do item para um número para que nós
	possamos checar se é uma quantidade válida.
