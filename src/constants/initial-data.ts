export const initialData: Column[] = [
  {
    id: 'todo',
    title: 'To do',
    tasks: [
      { id: '1', title: 'Testar Navegadores', content: 'Verificar e garantir a compatibilidade da aplicação em diferentes navegadores.' },
      { id: '2', title: 'Atualizar Bibliotecas', content: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos' },
      { id: '3', title: 'Implementar Animações', content: 'Adicionar efeitos visuais e transições para melhorar a experiência do usuário.' },
    ],
  },
  {
    id: 'inProgress',
    title: 'Doing',
    tasks: [{ id: '4', title: 'Atualizar Bibliotecas', content: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos' }],
  },
  {
    id: 'qa',
    title: 'QA',
    tasks: [{ id: '5', title: 'Atualizar Bibliotecas', content: 'Manter as libs atualizadas para garantir segurança e aproveitar novos recursos' }],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [{ id: '6', title: 'Final Project: App development', content: 'Business Web Development' }],
  },
];
