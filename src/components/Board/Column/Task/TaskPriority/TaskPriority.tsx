import * as S from './TaskPriority.styles';

const TaskPriority = ({ priority, onClick, ...rest }: TaskPriorityProps) => <S.Priority priority={priority} onClick={onClick} {...rest}>{priority}</S.Priority>;

export default TaskPriority;
