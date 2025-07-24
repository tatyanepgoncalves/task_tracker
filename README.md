# Rastreador de Tarefas

O Rastreador de Tarefas é um projeto usado para rastrear e gerenciar suas tarefas. Nesta tarefa, você criará uma interface de linha de comando (CLI) simples para rastrear o que precisa fazer, o que já fez e no que está trabalhando atualmente. Este projeto ajudará você a praticar suas habilidades de programação, incluindo trabalhar com o sistema de arquivos, lidar com entradas do usuário e construir uma aplicação CLI simples.


## Requisitos
O aplicativo deve ser executado a partir da linha de comando, aceitar ações e entradas do usuário como argumentos e armazenar as tarefas em um arquivo JSON. O usuário deve ser capaz de:

- Adicionar, Atualizar e Excluir tarefas
- Marcar uma tarefa como em andamento ou concluída
- Listar todas as tarefas
- Listar todas as tarefas concluídas
- Listar todas as tarefas não concluídas
- Listar todas as tarefas em andamento

Aqui estão algumas restrições para orientar a implementação:

- Você pode usar qualquer linguagem de programação para construir este projeto.
- Use argumentos posicionais na linha de comando para aceitar entradas do usuário.
Use um arquivo JSON para armazenar as tarefas no diretório atual.
- O arquivo JSON deve ser criado caso não exista.
Use o módulo nativo do sistema de arquivos da sua linguagem de programação para interagir com o arquivo JSON.
- Não use bibliotecas ou frameworks externos para construir este projeto.
- Certifique-se de lidar com erros e casos extremos de forma elegante.


## Propriedades da Tarefa
Cada tarefa deve ter as seguintes propriedades:

- ``id``: Um identificador exclusivo para a tarefa
- ``description``: Uma breve descrição da tarefa
status: O status da tarefa (a fazer, em andamento, concluída)
- ``createdAt``: A data e a hora em que a tarefa foi criada
- ``updatedAt``: A data e a hora em que a tarefa foi atualizada pela última vez

> Certifique-se de adicionar essas propriedades ao arquivo JSON ao adicionar uma nova tarefa e atualizá-las ao atualizar uma tarefa.