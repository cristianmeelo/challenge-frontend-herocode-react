import { atom } from 'recoil';
import generateRandomTaskId from '@/functions/generateRandomTaskId/generateRandomTaskId';

const taskState = atom<Task>({
  key: 'taskState',
  default: {
    id: generateRandomTaskId(),
    title: '',
    content: '',
    completionDate: '',
    priority: 'Low',
  },
});

export default taskState;
