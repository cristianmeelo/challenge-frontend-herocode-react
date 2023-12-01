import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import * as S from './Task.styles';

const Task = ({ task, index }: TaskProps) => (
  <Draggable key={task.id} draggableId={task.id} index={index}>
    {(provided: DraggableProvided) => (
      <S.Task ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <S.TaskTitle>{task.title}</S.TaskTitle>
        <S.TaskContent>{task.content}</S.TaskContent>
      </S.Task>
    )}
  </Draggable>
);

export default Task;
