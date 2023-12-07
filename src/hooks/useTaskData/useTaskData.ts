import { useRecoilState } from 'recoil';
import taskState from '@/context/atoms/taskState';
import generateRandomTaskId from '@/functions/generateRandomTaskId/generateRandomTaskId';

const useTaskData = (): UseTaskData => {
  const [taskData, setTaskData] = useRecoilState<Task>(taskState);

  const cleanTaskData = () => {
    setTaskData({
      id: generateRandomTaskId(),
      title: '',
      content: '',
      completionDate: '',
      priority: 'Low',
    });
  };

  return { taskData, setTaskData, cleanTaskData };
};

export default useTaskData;
