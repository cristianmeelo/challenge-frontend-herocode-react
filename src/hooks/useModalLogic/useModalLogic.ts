import useHandleColumns from '../useHandleColumns/useHandleColumns';
import useToastNotifications from '../useToastNotifications/useToastNotifications';
import useControlModalStatus from '../useControlModalStatus/useControlModalStatus';
import useTaskData from '../useTaskData/useTaskData';

const useModalLogic = () => {
  const { columns, setColumns } = useHandleColumns();
  const { toggleModalStatus } = useControlModalStatus();
  const { notifySuccess, notifyError } = useToastNotifications();
  const { taskData, setTaskData, cleanTaskData } = useTaskData();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskData((prevData: Task) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handlePriorityClick = (selectedPriority: TaskPriority) => {
    setTaskData((prevData: Task) => ({
      ...prevData,
      priority: selectedPriority,
    }));
  };

  const addTaskToColumn = (columns: Column[], columnId: string, task: Task): Column[] => {
    const updatedColumns = columns.map((col) => ({
      ...col,
      tasks: col.id === columnId ? [...col.tasks, task] : col.tasks,
    }));
    return updatedColumns;
  };

  const handleSubmit = () => {
    if (!taskData.title || !taskData.content || !taskData.completionDate || !taskData.priority) {
      notifyError('Preencha todos os campos!');
      return;
    }

    const newTask: Task = {
      id: taskData.id,
      title: taskData.title,
      content: taskData.content,
      completionDate: taskData.completionDate,
      priority: taskData.priority,
    };

    const updatedColumns = addTaskToColumn(columns, 'todo', newTask);
    setColumns(updatedColumns);
    cleanTaskData();
    toggleModalStatus();
    notifySuccess('Task adicionada com sucesso!');
  };

  return {
    handleInputChange,
    handlePriorityClick,
    handleSubmit,
  };
};

export default useModalLogic;
