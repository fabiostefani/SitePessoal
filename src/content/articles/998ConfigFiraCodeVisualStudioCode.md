---
title: Configurando a fonte Fira Code no VS Code
---


<p align="justify">
Eu particularmente acho cansativo ler códigos que possuem muitos caracteres em sequência, como por exemplo, =>, <=, >=, etc... Isso porque temos que gastar energia para escanear, analisar e unir os vários caracteres em um único e lógico caracter. 
Isso me fez procurar alguma fonte que possuisse ligaduras (que basicamente são  vários caracteres representados por um único símbolo (ou glifo)).
Veja aqui alguns exemplos
</p>
<p align="center">
  <img src="https://i.imgur.com/pnVl1AU.png" />
</p>

<p align="justify">
Então, descobri a fonte <a href="https://github.com/tonsky/FiraCode"><b>Fira Code</b></a>.
É uma extensão da fonte Fira Mono que contém um conjunto de ligaduras para combinações de vários caracteres de programação comuns. Este é apenas um recurso de renderização de fonte: o código subjacente permanece compatível com ASCII. Isso me ajuda a ler e entender o código mais rapidamente. 
</p>

## Configurando o VS Code

Para se utilizar essa fonte no VS Code, você deve realizar alguns passos.

1. Baixar a fonte do repositório [GitHub](https://github.com/tonsky/FiraCode)
2. Efetuar a instalação das fontes no windows. Instale as fontes TTF.
<p align="center">
  <img src="https://i.imgur.com/W2yCzsn.png"/>
</p>

3. Abra o VS Code e acesse as configurações do usuário. Pressione *`CTRL + ,`* para abrir as configurações.

4. Na seção Font Family, adicione 'Fira Code' 
<p align="center">
  <img src="https://i.imgur.com/O8djF4K.png" />
</p>

5.  Depois no campo de busca, procure por **editor.fontLigatures**
E clique em edit Settings.json.
<p align="center">
  <img src="https://i.imgur.com/whmL00t.png" />
</p>

6. Adicione a linha no arquivo Settings.Json *`"editor.fontLigatures": true`*


Aqui está a configuração final do meu VS Code 
```
{
    "workbench.colorTheme": "Atom One Dark",
    "workbench.startupEditor": "newUntitledFile",
    "workbench.iconTheme": "vscode-icons",
    "git.suggestSmartCommit": false,
    "explorer.confirmDragAndDrop": false,
    "git.confirmSync": false,
    "explorer.confirmDelete": false,
    "git.autofetch": true,
    "terminal.integrated.tabs.enabled": true,
    "terminal.integrated.fontFamily": "monospace",
    "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "json.schemas": [
    
    ]
}
```
7. Reinicie o VS Code para aplicar a configuração.
<br>
Veja o antes/depois em um pequeno exemplo de código.
<br>
<p align="center">
  <img src="https://i.imgur.com/yUNBRFc.png" />
</p>

E agora é só curtir a nova fonte no VS Code.

Se cuidem e até a próxima.