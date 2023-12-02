import { Draggable, DraggableProvided } from '@hello-pangea/dnd';
import * as S from './Task.styles';

const Task = ({ task, index, column }: TaskProps) => (
  <Draggable key={task.id} draggableId={task.id} index={index}>
    {(provided: DraggableProvided) => (
      <S.Task ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <S.TaskTitle isDoneColumn={column === 'done'}>{task.title}</S.TaskTitle>
        <S.TaskContent>{task.content}</S.TaskContent>
      </S.Task>
    )}
  </Draggable>
);

export default Task;
