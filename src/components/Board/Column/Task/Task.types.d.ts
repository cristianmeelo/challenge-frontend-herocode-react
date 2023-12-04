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
   * The detailed content or description of the task.
   * @member {string}
   */
  content: string;

  /**
   * The completion date of the task, represented as a Date object, string, or null if not completed.
   * @member {Date | string | null}
   */
  completionDate: Date | string | null;

  /**
   * The priority level of the task.
   * @member {TaskPriority}
   */
  priority: TaskPriority;
}

/**
 * Represents the properties for a component that renders a task.
 * @interface
 */
interface TaskProps {
  /**
   * The task object containing information about the task.
   * @member {Task}
   */
  task: Task;

  /**
   * The index of the task within its containing list.
   * @member {number}
   */
  index: number;

  /**
   * The identifier of the column to which the task belongs.
   * @member {string}
   */
  column: string;
}

/**
 * Represents the styled properties derived from `TaskProps`.
 * @interface
 */
interface StyledTask {
  /**
   * Indicates whether the task belongs to the "Done" column.
   * @member {boolean}
   */
  isDoneColumn: boolean;
}

/**
 * Represents the priority levels for a task.
 * @type {('Low' | 'Medium' | 'High')}
 */
type TaskPriority = 'Low' | 'Medium' | 'High';
