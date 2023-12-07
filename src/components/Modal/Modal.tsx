import { ToastContainer } from 'react-toastify';

import useModalLogic from '@/hooks/useModalLogic/useModalLogic';
import useControlModalStatus from '@/hooks/useControlModalStatus/useControlModalStatus';
import useTaskData from '@/hooks/useTaskData/useTaskData';

import Priority from '@/components/Board/Column/Task/TaskPriority/TaskPriority';
import Button from '@/components/Button/Button';
import TextArea from '@/components/TextArea/TextArea';
import TextField from '@/components/TextField/TextField';
import PickData from '@/components/Icons/PickData/PickData';
import * as S from './Modal.styles';

const Modal = () => {
  const { isModalOpen, toggleModalStatus } = useControlModalStatus();
  const { taskData } = useTaskData();

  const { handleInputChange, handlePriorityClick, handleSubmit } = useModalLogic();

  return (
    <div>
      {isModalOpen && (
        <>
          <S.Overlay onClick={toggleModalStatus} />
          <S.ModalContainer>
            <S.ModalTitle>novo card</S.ModalTitle>
            <S.ModalInputs>
              <TextField
                type="text"
                name="title"
                label="título da Task"
                placeholder="Digite aqui o título da task"
                value={taskData.title}
                onChange={handleInputChange}
              />

              <TextArea name="content" label="Descrição" placeholder="Digite a descrição" value={taskData.content} onChange={handleInputChange} />

              <S.Row>
                <S.ColCompletionDate>
                  <TextField
                    type="text"
                    name="completionDate"
                    label="Data final"
                    placeholder="Selecione a data de entrega"
                    icon={<PickData />}
                    value={taskData.completionDate ?? ''}
                    onChange={handleInputChange}
                  />
                </S.ColCompletionDate>

                <S.ColPriority>
                  <S.Label>priority</S.Label>
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
      <ToastContainer />
    </div>
  );
};

export default Modal;
