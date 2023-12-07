import useTaskData from '@/hooks/useTaskData/useTaskData';
import Priority from '@/components/Board/Column/Task/TaskPriority/TaskPriority';
import * as S from './SelectPriority.styles';

const SelectPriority = () => {
  const { taskData, setTaskData } = useTaskData();

  const handlePriorityClick = (selectedPriority: TaskPriority) => {
    setTaskData((prevData: Task) => {
      return {
        ...prevData,
        priority: selectedPriority,
      };
    });
  };

  return (
    <div>
      <S.Label>priority</S.Label>
      <S.RowPriority>
        <Priority priority="High" onClick={() => handlePriorityClick('High')} isSelected={taskData.priority === 'High'} />
        <Priority priority="Medium" onClick={() => handlePriorityClick('Medium')} isSelected={taskData.priority === 'Medium'} />
        <Priority priority="Low" onClick={() => handlePriorityClick('Low')} isSelected={taskData.priority === 'Low'} />
      </S.RowPriority>
    </div>
  );
};

export default SelectPriority;
