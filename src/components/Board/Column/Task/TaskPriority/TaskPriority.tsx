import * as S from './TaskPriority.styles';

const TaskPriority = ({ priority }: TaskPriorityProps) => <S.Priority priority={priority}>{priority}</S.Priority>;

export default TaskPriority;
