import * as S from './TaskPriority.styles';

const TaskPriority: React.FC<TaskPriorityProps> = ({ priority }) => <S.Priority priority={priority}>{priority}</S.Priority>;

export default TaskPriority;
