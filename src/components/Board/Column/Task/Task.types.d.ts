interface Task {
  id: string;
  title: string;
  content: string;
}

interface TaskProps {
  task: Task;
  index: number;
  column: string;
}

interface StyledTask {
  isDoneColumn: boolean;
}
