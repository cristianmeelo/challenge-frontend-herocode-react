/**
 * Represents the properties for rendering the title of a task.
 * @interface
 */
interface TaskTitleProps {
  /**
   * The title or name of the task.
   * @member {string}
   */
  title: string;

  /**
   * Indicates whether the task belongs to the "Done" column.
   * @member {boolean}
   */
  isDoneColumn: boolean;
}
