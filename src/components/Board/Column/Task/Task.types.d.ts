interface Task {
  id: string;
  title: string;
  content: string;
  completionDate: Date | string | null;
  priority: TaskPriority;
}

interface TaskProps {
  task: Task;
  index: number;
  column: string;
}

interface StyledTask {
  isDoneColumn: boolean;
}

type TaskPriority = 'Low' | 'Medium' | 'High';
