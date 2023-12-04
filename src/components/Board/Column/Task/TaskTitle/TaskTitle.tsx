import * as S from './TaskTitle.styles';

const TaskTitle = ({ isDoneColumn, title }: TaskTitleProps) => <S.TaskTitle isDoneColumn={isDoneColumn}>{title}</S.TaskTitle>;

export default TaskTitle;
