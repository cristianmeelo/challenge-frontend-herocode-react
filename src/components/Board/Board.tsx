import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useRecoilState, useRecoilValue } from 'recoil';
import initialTaskState from '../../context/atoms/initialTaskState';
import sidebarState from '../../context/atoms/sidebarState';
import Column from './Column/Column';
import * as S from './Board.styles';

const Board = () => {
  const [columns, setColumns] = useRecoilState<Column[]>(initialTaskState);
  const isSidebarOpen = useRecoilValue(sidebarState);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    const updatedColumns = [...columns];
    const sourceColumn = updatedColumns.find((col) => col.id === source.droppableId);
    const destinationColumn = updatedColumns.find((col) => col.id === destination.droppableId);
    const taskToMove = sourceColumn?.tasks.find((task) => task.id === draggableId);
    if (sourceColumn && destinationColumn && taskToMove) {
      sourceColumn.tasks.splice(source.index, 1);
      destinationColumn.tasks.splice(destination.index, 0, taskToMove);
      setColumns(updatedColumns);
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
