import React from 'react';
import { Clock } from '../../../../Icons/Clock/Clock';
import DoneIcon from '../../../../Icons/Done/Done';
import * as S from './TaskDeadline.styles';

const formatDate = (date: Date | string | null) => {
  if (date) {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const year = parsedDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return 'Não concluído';
};

const TaskDeadline: React.FC<TaskDeadlineProps> = ({ completionDate, isDoneColumn }) => {
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
