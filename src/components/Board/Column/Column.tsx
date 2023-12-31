import { Droppable, DroppableProvided } from '@hello-pangea/dnd';
import Task from './Task/Task';
import * as S from './Column.styles';

const Column = ({ column }: ColumnProps) => (
  <Droppable key={column.id} droppableId={column.id}>
    {(provided: DroppableProvided) => (
      <S.Column {...provided.droppableProps} ref={provided.innerRef}>
        <S.ColumnTitle>
          {column.title}
          <S.ColumnCountTasks> ({column.tasks.length})</S.ColumnCountTasks>
        </S.ColumnTitle>
        {column.tasks.map((task: Task, index: number) => (
          <Task key={task.id} task={task} index={index} column={column.id} />
        ))}
        {provided.placeholder}
      </S.Column>
    )}
  </Droppable>
);

export default Column;
