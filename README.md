## Utilities

Versão do node = 18 <br />

VS Code Plugins:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code Styled Components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

Obs1.: Preferencialmente usar o VS Code
<br />
Obs2.: Antes de tudo confira de seu editor, está configurado corretamente para formatar ao salvar os arquivos: [Mais informações](https://www.codementor.io/@myogeshchavan97/how-to-automatically-format-code-in-visual-studio-code-using-prettier-1nebhfbxak)<br />

Opcional: [Git Moji](https://gitmoji.dev/) <br />

<br />

# Rodando o projeto

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Primeiro instale as dependências:

```bash
npm install
# or
yarn install
```

Depois inicie o servidor local

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu browser para ver o projeto.

Novas páginas podem ser criadas em src/pages
As páginas possuem um template que pode ser criado ou encontrado em src/templetes/

Para a criação de novos componentes rode no terminal:

```bash
npm generate
# or
yarn generate
```

Ao rodar este comando será solicitado o nome do componente que você deseja criar.
Ao definir o nome de enter, e o plop.js criará o componente com 2 arquivos, "index.jsx e style.js dentro de src/components/

A endereço principal da API está nos arquivos .env
e as rotas da API estão em services/wordpress (novas rotas podem ser adicionadas aqui)

<br />

## Styled components

Este projeto utiliza [styled components](https://styled-components.com/docs/advanced)

<br />

### Styleguide

Rode o projeto e acesse a rota dev/guideline para ver algumas opções de componentes e padrões de fontes, cores, botões...

### Theme

Valores padrões para uso (spacings, colors, container, transitions...) estão em src/styles/theme.js

### Grid System

Para o grid estamos utilizando a lib [React Flexa](https://github.com/aaronvanston/react-flexa)
Olhar a documentação sempre que for necesário a inclusão de colunas

### Cores

O sistema de cores foi adaptado para uso das cores da Porto, já esperando receber valores das cores verticais<br />
Ex.: theme.colors.primary['70']<br />
primary = qual a paleta de cor esta sendo utilizada<br />
['70'] = intencidade da cor, é uma string pois pode ser usada no formato mais padrão: ("base", "light", "dark" ...)

A paleta neutral vai de "0" sendo preto, e 100 sendo branco, os intermédios são tons de cinza do mais escuro para o mais claro. Além de ter a cor offWhite

### Fontes

Criar componente Tapography ou Regras para uso da fonte de acordo com as necessidades do projeto e adicionar as instruções aqui

### Buttons

Para botões e links utilizar sempre o component Button, em default props estão listados as oçõpes de uso desse component

### Icones

Utilizar sempre que possivel em vetor (svg), como ainda não existe uma lib para os icones da Porto, eles estão dentro de src/utils/icons. Sempre que for inserido um icone novo seve ser incorporado na mesma destrutura

<br /><br />

# Branchs

### Main:

Tudo que será enviado para produção. Só entra aqui dps de passar pela develop e rodar os testes em homologação

### Develop:

O que está em desenvolvimento

### Staging:

O que está em pronto em ambiente para testes
O deploy para testes deve ser feito no Vercel da Raccoon

<br />

### Nomenclaturas de branchs:

docs: apenas mudanças de documentação;<br />
feature: uma nova funcionalidade/componentes;<br />
fix: a correção de um bug;<br />
hotfix: a correção de um bug urgente;<br />
perf: mudança de código focada em melhorar performance;<br />
refactor: mudança de código que não adiciona uma funcionalidade e também não corrigi um bug;<br />
style: mudanças no código que não afetam seu significado (espaço em branco, formatação, ponto e vírgula, etc);<br />
test: adicionar ou corrigir testes.<br />

Ex.: feature/newsletter

<br />

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<br />

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
