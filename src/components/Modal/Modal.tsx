import { useState } from 'react';

import generateRandomTaskId from '../../functions/generateRandomTaskId/generateRandomTaskId';
import Priority from '../Board/Column/Task/TaskPriority/TaskPriority';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import TextField from '../TextField/TextField';
import PickData from '../Icons/PickData/PickData';
import * as S from './Modal.styles';

const Modal = ({ isOpen, toggleModalStatus, columns, setColumns }: ModalProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [taskData, setTaskData] = useState<Task>({
    id: generateRandomTaskId(),
    title: '',
    content: '',
    completionDate: '',
    priority: 'Low',
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePriorityClick = (selectedPriority: string) => {
    setTaskData((prevData) => ({
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
    const newTask: Task = {
      id: taskData.id,
      title: taskData.title,
      content: taskData.content,
      completionDate: taskData.completionDate,
      priority: taskData.priority,
    };

    const updatedColumns = addTaskToColumn(columns, 'todo', newTask);
    setColumns(updatedColumns);

    setTaskData({
      id: generateRandomTaskId(),
      title: '',
      content: '',
      completionDate: '',
      priority: 'Low',
    });

    toggleModalStatus();
  };

  return (
    <div>
      {isOpen && (
        <>
          <S.Overlay onClick={toggleModalStatus} />
          <S.ModalContainer>
            <S.ModalTitle>novo card</S.ModalTitle>
            <S.ModalInputs>
              <TextField
                type="text"
                name="title"
                label="Título da Task"
                placeholder="Digite aqui o título da task"
                value={taskData.title}
                onChange={handleInputChange}
              />
              <TextArea name="content" label="Descrição" placeholder="Digite a descrição" value={taskData.content} onChange={handleInputChange} />

              <S.Row>
                <S.ColCompletionDate>
                  <TextField
                    type={isFocused ? 'date' : 'text'}
                    name="completionDate"
                    label="Data final"
                    placeholder="Selecione a data de entrega"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    icon={<PickData />}
                    value={taskData.completionDate ?? ''}
                    onChange={handleInputChange}
                  />
                </S.ColCompletionDate>

                <S.ColPriority>
                  <S.Label>Prioridade</S.Label>
                  <S.RowPriority>
                    <Priority priority="High" onClick={() => handlePriorityClick('High')} isSelected={taskData.priority === 'High'} />
                    <Priority priority="Medium" onClick={() => handlePriorityClick('Medium')} isSelected={taskData.priority === 'Medium'} />
                    <Priority priority="Low" onClick={() => handlePriorityClick('Low')} isSelected={taskData.priority === 'Low'} />
                  </S.RowPriority>
                </S.ColPriority>
              </S.Row>
            </S.ModalInputs>
            <S.ModalActions>
              <Button shape="rounded" variant="outlined" color="error" onClick={toggleModalStatus}>
                CANCELAR
              </Button>
              <Button shape="rounded" variant="outlined" color="secondary" onClick={handleSubmit}>
                CRIAR
              </Button>
            </S.ModalActions>
          </S.ModalContainer>
        </>
      )}
    </div>
  );
};

export default Modal;
