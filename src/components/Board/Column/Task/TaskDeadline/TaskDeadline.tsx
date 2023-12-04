import formatDate from '../../../../../functions/formatDate/formatDate';
import Clock from '../../../../Icons/Clock/Clock';
import DoneIcon from '../../../../Icons/Done/Done';
import * as S from './TaskDeadline.styles';

const TaskDeadline = ({ completionDate, isDoneColumn }: TaskDeadlineProps) => {
  const currentDate = new Date();
  const isOverdue = completionDate ? new Date(completionDate) <= currentDate : false;

  return (
    <S.Deadline isDoneColumn={isDoneColumn} isOverdue={isOverdue}>
      {isDoneColumn ? <DoneIcon /> : <Clock isOverdue={isOverdue} />}
      {isDoneColumn ? 'Finalizado' : formatDate(completionDate)}
    </S.Deadline>
  );
};

export default TaskDeadline;
