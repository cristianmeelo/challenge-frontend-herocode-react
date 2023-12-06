/**
 * Represents a column in a task management system.
 * @interface
 */
interface Column {
  /**
   * The unique identifier of the column.
   * @member {string}
   */
  id: string;

  /**
   * The title or name of the column.
   * @member {string}
   */
  title: string;

  /**
   * The array of tasks associated with the column.
   * @member {Task[]}
   */
  tasks: Task[];
}

/**
 * Represents the props for the Board component.
 * @interface
 */
interface BoardProps extends DynamicContentProps {}

/**
 * Represents the props for the components that dynamically switch content based on user selection.
 * @interface
 */
interface DynamicContentProps {
  // ... add any common props for components with dynamic content if needed
}

/**
 * Represents a task in a task management system.
 * @interface
 */
interface Task {
  /**
   * The unique identifier of the task.
   * @member {string}
   */
  id: string;

  /**
   * The title or name of the task.
   * @member {string}
   */
  title: string;

  /**
   * The content or description of the task.
   * @member {string}
   */
  content: string;

  /**
   * The completion date of the task.
   * @member {string | null}
   */
  completionDate: string | null;

  /**
   * The priority level of the task.
   * @member {string}
   */
  priority: string;
}
