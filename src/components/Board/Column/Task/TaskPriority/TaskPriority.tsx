import * as S from './TaskPriority.styles';

const TaskPriority = ({ priority, isSelected, isDoneColumn, onClick, ...rest }: TaskPriorityProps) => (
  <S.Priority priority={priority} onClick={onClick} isSelected={isSelected} isDoneColumn={isDoneColumn} {...rest}>
    {priority}
  </S.Priority>
);

export default TaskPriority;
