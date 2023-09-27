# Corelab Challange - Breno Perricone Fischer - Front-end

PT: O projeto foi realizado de acordo com as regras do desafio. Para fins de teste prático de diferentes conceitos do dia-dia, foi proposto a criação de uma aplicação web, tanto da API como do front-end. A seleção em questão faz parte do processo seletivo para vaga de <b>desenvolvedor full-stack junior</b>, na empresa <b>Corelab</b>.

----

EN: The project was carried out according to the challenge rules. For practical testing purposes of different day-to-day concepts, the creation of a web application, both the API and the front-end, was proposed. The selection in question is part of the hiring process for the <b>junior full-stack developer</b> position at <b>Corelab</b>.

## O projeto/The project

PT: O projeto consiste em um organizador de tarefas. O usuário deverá ser capaz de criar e gerenciar suas listas de tarefas. 

Esse repositório é apenas referente ao <b>front-end</b> da aplicação. O código responsável pela criação da API e banco de dados, estará contido em outro repositório.

----

EN: The project consists of a task organizer. The user should be able to create and manage their task lists.

This repository is only related to the <b>front-end</b> of the application. The code that will create the API and the database will be contained in another repository.

### Requisitos Funcionais / Functional Requirements

PT:
- Os usuários devem ser capazes de criar, ler, atualizar e excluir tarefas usando a API.
- Os usuários devem ser capazes de marcar um item como favorito.
- Os usuários devem ser capazes de definir uma cor para cada item de tarefa.
- O frontend React deve exibir a lista de tarefas do usuário de maneira responsiva e visualmente atrativa, com a capacidade de filtrar por itens favoritos e cor.
- Os itens favoritos devem ser exibidos no topo da lista.

EN:
- Users should be able to create, read, update, and delete to-do items using the API.
- Users should be able to mark an item as a favorite.
- Users should be able to set a color for each to-do item.
- The React frontend should display the user's to-do list in a responsive and visually appealing manner, with the ability to filter by favorite items and color.
- The favorited items should be displayed at the top of the list.

### Requisitos Não Funcionais / Non-functional 

PT: 
- A API do backend deve ser construída no framework Node.js e usar um banco de dados de sua escolha (por exemplo, MongoDB, PostgreSQL, etc.).
- O frontend deve ser construído em React e utilizar ferramentas modernas de desenvolvimento web e as melhores práticas.
- A aplicação deve ser responsiva e visualmente atraente.

EN: 
- The backend API should be built in Node.js framework and use a database of your choice (e.g., MongoDB, PostgreSQL, etc.).
- The frontend should be built in React and use modern web development tools and best practices.
- The application should be responsive and visually appealing.

### Ferramentas utilizadas / Libs

PT: 
- <b>react ^18.1.0</b> (ferramenta obrigatória)

- <b>NPM ^8.5.5</b>: como gerenciador de pacotes.

- <b>eslint</b>: apenas para desenvolvimento, auxilia na padronização do código, a partir de regras pré-configuradas.
    - <b>@rocketseat/eslint-config</b>: conjunto de regras para o eslint - detalhe que a regra "end of line" foi modificada. 

- <b>styled-compoents</b>: ferramenta para auxiliar na estilização de componentes, permitindo escrever código CSS dentro de arquivos JS (ou TS).

- <b>axios</b>: auxilia na criação de um HTTP client.

- <b>framer-motion</b>: criação de animações para ambiente React, incluindo animações com mudanças de estado de um componente

EN: 
- <b>react ^18.1.0</b> (mandatory tool)

- <b>NPM ^8.5.5</b>: as the package manager.

- <b>eslint</b>: used for development to assist in code standardization based on pre-configured rules.
    - <b>@rocketseat/eslint-config</b>: set of rules for eslint - note that the "end of line" rule was modified.

- <b>styled-components</b>: tool to assist in styling components, allowing you to write CSS code within JS (or TS) files.

- <b>axios</b>: helps in creating an HTTP client.

- <b>framer-motion</b>: used for creating animations in a React environment, including animations with state changes of a component.

### Estrutura de pastas / Folder's structure
PT:
.
├── public                  # Contém o arquivo raiz (index.html), além de ser local para importar fontes
├── src                     # Arquivos fonte
|   ├── @types
|   ├── api
|   |   ├── configs         # Arquivos de configuração do axios, como URL base para as requisições
|   |   └── services        # Utiliza o axios para fazer requisições com o banco de dados
|   ├── assets              # Imagens e ícones utilizados no projeto                  
|   ├── components
|   |   ├── Header          
|   |   ├── NewNote         
|   |   ├── Note            
|   |   └── Notes                                  
|   ├── contexts            # Responsável por controlar o estado global da aplicação, guardando a lista de Notes
|   ├── styles              # Estilos globais e mixins (funções) para estilo responsivo
|   ├── types               # Tipos globais, como NoteType
|   ├── utils  
|   ├── App.tsx             
|   └── index.tsx           # Utiliza React para renderizar a aplicação. Inicializa Contextos e estilização global
├── package.json          
└── README.md

EN:
.
├── public                  # It contains the root file (index.html), in addition to being a place to import fonts
├── src                     # Source files
|   ├── @types
|   ├── api
|   |   ├── configs         # axios configuration files, as base URL for requests
|   |   └── services        # Use axios to make database requests
|   ├── assets              # Images and Icons used on project                
|   ├── components
|   |   ├── Header          
|   |   ├── NewNote         
|   |   ├── Note            
|   |   └── Notes                                
|   ├── contexts            # Responsible for controlling the global state of the application, storing the list of Notes
|   ├── styles              # Global styles and mixins (functions) for responsive style
|   ├── types               # Global types, as NoteType
|   ├── utils  
|   ├── App.tsx             
|   └── index.tsx           # Use React to render the app. Initialize Contexts
├── package.json          
└── README.md