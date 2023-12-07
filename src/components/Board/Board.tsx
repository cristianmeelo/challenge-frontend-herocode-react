import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import useHandleColumns from '@/hooks/useHandleColumns/useHandleColumns';
import useControlSidebarStatus from '@/hooks/useControlSidebarStatus/useControlSidebarStatus';
import Column from '@/components/Board/Column/Column';
import * as S from './Board.styles';

const Board = () => {
  const { isSidebarOpen } = useControlSidebarStatus();
  const { columns, setColumns } = useHandleColumns();

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const updatedColumns = [...columns];
    const sourceColumnIndex = updatedColumns.findIndex((col) => col.id === source.droppableId);
    const destinationColumnIndex = updatedColumns.findIndex((col) => col.id === destination.droppableId);

    if (sourceColumnIndex !== -1 && destinationColumnIndex !== -1) {
      const sourceColumn = { ...updatedColumns[sourceColumnIndex] };
      const destinationColumn = { ...updatedColumns[destinationColumnIndex] };
      const taskToMoveIndex = sourceColumn.tasks.findIndex((task) => task.id === draggableId);

      if (taskToMoveIndex !== -1) {
        const updatedSourceTasks = [...sourceColumn.tasks];
        const updatedDestinationTasks = [...destinationColumn.tasks];
        const [movedTask] = updatedSourceTasks.splice(taskToMoveIndex, 1);
        updatedDestinationTasks.splice(destination.index, 0, movedTask);
        updatedColumns[sourceColumnIndex] = { ...sourceColumn, tasks: updatedSourceTasks };
        updatedColumns[destinationColumnIndex] = { ...destinationColumn, tasks: updatedDestinationTasks };
        setColumns(updatedColumns);
      }
    }
  };

  return (
    <S.Container isSidebarOpen={isSidebarOpen}>
      <DragDropContext onDragEnd={onDragEnd}>
        <S.Board>
          {columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
        </S.Board>
      </DragDropContext>
    </S.Container>
  );
};

export default Board;
