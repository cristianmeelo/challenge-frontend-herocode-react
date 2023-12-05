import * as S from './TaskPriority.styles';

const TaskPriority = ({ priority, onClick, isSelected, ...rest }: TaskPriorityProps) => (
  <S.Priority priority={priority} onClick={onClick} isSelected={isSelected} {...rest}>
    {priority}
  </S.Priority>
);

export default TaskPriority;
