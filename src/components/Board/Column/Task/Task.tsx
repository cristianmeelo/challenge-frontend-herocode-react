import { Draggable, DraggableProvided } from '@hello-pangea/dnd';
import TaskDeadline from './TaskDeadline/TaskDeadline';
import TaskPriority from './TaskPriority/TaskPriority';
import TaskTitle from './TaskTitle/TaskTitle';
import TaskContent from './TaskContent/TaskContent';
import * as S from './Task.styles';

const Task: React.FC<TaskProps> = ({ task, index, column }) => (
  <Draggable key={task.id} draggableId={task.id} index={index}>
    {(provided: DraggableProvided) => (
      <S.Task ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <TaskTitle isDoneColumn={column === 'done'} title={task.title} />
        <TaskContent content={task.content} />
        <S.TaskActions>
          <TaskDeadline isDoneColumn={column === 'done'} completionDate={task.completionDate} />
          <TaskPriority priority={task.priority} />
        </S.TaskActions>
      </S.Task>
    )}
  </Draggable>
);

export default Task;
