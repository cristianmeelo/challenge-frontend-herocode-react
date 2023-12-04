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
