---
title: Dicas para identificar Code Smells
---



> “In computer programming, a code smell is any characteristic in the source code of a program that possibly indicates a deeper problem”.
> -- <cite>[Wikipedia][2]</cite>

[2]: https://en.wikipedia.org/wiki/Code_smell#cite_note-:0-1

> "A code smell is a surface indication that usually corresponds to a deeper problem in the system."
> -- <cite>[Martin Fowler][1]</cite>

[1]: https://martinfowler.com/bliki/CodeSmell.html

Vou apresentar alguns pontos que considero Code Smells. Costumo avaliar esses pontos, dentre outros, quando faço code review.

## **Mysterious Name**
<p align="justify">
Funções, módulos, variáveis ou classes são nomeados de forma que não comuniquem o que fazem ou como usá-los. 
Uma das coisas comuns sobre um Code Smell é a estratégia de nomenclatura. Se sua equipe não tem convenções ou princípios de nomenclatura de projeto, então você deve propor isso. Conforme o aplicativo cresce, ter um princípio de nomenclatura é crucial. Talvez você já seja um desenvolvedor líder ou sênior e tenha suas próprias maneiras de nomear variáveis. Ainda assim, uma equipe tem desenvolvedores iniciantes, alguns desenvolvedores sênior, arquitetos se o projeto for significativo e um gerente de projeto.
Em algum momento, sua equipe precisa falar a mesma língua. Isso significa ter princípios de nomenclatura e documentos para a arquitetura que todo desenvolvedor precisa respeitar. 
</p>
💡 Deixo aqui algumas dicas de utilização em nomes de funções, variáveis e etc..

* Certifique-se de revelar a intenção de sua variável.
* Evite mal-entendidos sempre que puder.
* Um nome de variável deve ser pronunciável
* Um nome de variável deve ser pesquisável
* Uma estratégia de nomenclatura deve ser consistente 


## **Long method**
<p align="justify">
Um método, função ou procedimento que cresceu muito é uma fonte de bugs e mal-entendidos.

💡 A regra é: cada método/função deve fazer uma coisa e faze-lá bem feito. 
</p>


## **God object**
<p align="justify">
Uma classe que cresceu muito e faz muitas coisas. Novamente, uma classe deve existir para fazer uma finalidade. Quando se torna maior e faz muitas coisas provavelmente você está ferindo o conceito SRP do SOLID. 
Precisamos dividi-la em novas classes, deixando cada qual com sua responsabilidade.
Isso evitará bugs, tempo de depuração e os testes serão muito mais fáceis! 
</p>

## **Duplicated code**
<p align="justify">
Existeência de Código idêntico ou semelhante em mais de um local dentro do fonte. Isso significa que você estará tempo e dinheiro em um futuro, pois aumentará o custo de manutenção e também o custo de teste. 

A refatoração deve ser discutida sempre que uma função, uma classe, um módulo ou um código, em geral, deve ser compartilhado entre as funcionalidades. Você constrói recurso por recurso, então, com o tempo, você certamente precisará fazer algumas refatorações.

💡 É vital ter em mente ao estimar uma história de usuário. Verifique se há necessidade de refatoração para que você considere isso ao fazer a estimativa. 
</p>

## **Too many parameters**
<p align="justify">
Uma longa lista de parâmetros é difícil de ler e torna complicada a chamada e o testes. Simplificar as coisas ajudará você a reduzir o tempo de depuração e também simplificará os testes. 
Isso pode indicar que o propósito da função foi mal concebido e que o código deve ser refatorado para que a responsabilidade seja atribuída de uma forma mais precisa.

> doSomething(buildParam1(x), buildParam2(x), buildParam3(x), a + Math.sin(x)*Math.tan(x*y + z))
</p>

## **Contrived complexity**
<p align="justify">
Uso forçado de Design Patterns supercomplicados, onde o design mais simples seria suficiente.

💡 Um padrão de design complexo, quando não necessário, não mostra o seu potencial, mostra a falta de capacidade de simplificar, de ver o quadro geral e maturidade. 
</p>

Esses são alguns pontos que você pode analisar para identificar Code Smells. Mas existe vários outros pontos que são considerados Code Smells.

Deixo aqui uma linha de código para você refletir.... 🤔
```
new XYZ(s).doSomething(buildParam1(x), buildParam2(x), buildParam3(x), a + Math.sin(x)*Math.tan(x*y + z)).doAnythingElse().build().sendRequest();
```

Por hoje seria isso, se cuidem. Bebam água ou cerveja 😂😁