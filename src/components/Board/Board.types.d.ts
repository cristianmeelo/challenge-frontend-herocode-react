interface BoardProps {
  isSidebarOpen: boolean;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
