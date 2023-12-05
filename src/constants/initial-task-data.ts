export const initialTaskData: Column[] = [
  {
    id: 'todo',
    title: 'To do',
    tasks: [
      {
        id: '1',
        title: 'Testar Navegadores',
        content: 'Verificar e garantir a compatibilidade da aplicação em diferentes navegadores.',
        completionDate: '2023-11-25',
        priority: 'High',
      },
      {
        id: '2',
        title: 'Atualizar Bibliotecas',
        content: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos',
        completionDate: '2023-12-25',
        priority: 'Low',
      },
      {
        id: '3',
        title: 'Implementar Animações',
        content: 'Adicionar efeitos visuais e transições para melhorar a experiência do usuário.',
        completionDate: '2023-12-25',
        priority: 'Medium',
      },
    ],
  },
  {
    id: 'inProgress',
    title: 'Doing',
    tasks: [
      {
        id: '4',
        title: 'Atualizar Bibliotecas',
        content: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos',
        completionDate: '2023-12-25',
        priority: 'Medium',
      },
    ],
  },
  {
    id: 'qa',
    title: 'QA',
    tasks: [
      {
        id: '5',
        title: 'Atualizar Bibliotecas',
        content: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos',
        completionDate: '2023-12-25',
        priority: 'High',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      { id: '6', title: 'Final Project: App development', content: 'Business Web Development', completionDate: '2023-12-25', priority: 'High' },
    ],
  },
];
