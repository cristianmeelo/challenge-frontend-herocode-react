import React, { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import Column from './Column/Column';

import * as S from './Board.styles';
import { initialData } from '../../constants/initial-data';

const Board: React.FC<BoardProps> = ({ isSidebarOpen }) => {
  const [columns, setColumns] = useState(initialData);

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
