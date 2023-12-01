import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './Column/Column';

import * as S from './Board.styles';
import { initialData } from '../../constants/initial-data';

const Board: React.FC<BoardProps> = ({ isSidebarOpen }) => {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    // Verifique se há um destino válido
    if (!destination) return;

    // Faça uma cópia profunda dos seus dados antes de manipulá-los
    const updatedColumns = [...columns];

    // Encontre a coluna de origem e a coluna de destino
    const sourceColumn = updatedColumns.find((col) => col.id === source.droppableId);
    const destinationColumn = updatedColumns.find((col) => col.id === destination.droppableId);

    // Encontre a tarefa que está sendo movida
    const taskToMove = sourceColumn?.tasks.find((task) => task.id === draggableId);

    // Verifique se todas as referências existem antes de prosseguir
    if (sourceColumn && destinationColumn && taskToMove) {
      // Remova a tarefa da coluna de origem
      sourceColumn.tasks.splice(source.index, 1);

      // Adicione a tarefa à coluna de destino
      destinationColumn.tasks.splice(destination.index, 0, taskToMove);

      // Atualize o estado com as alterações
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
