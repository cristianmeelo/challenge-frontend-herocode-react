/**
 * Represents the properties for rendering the priority of a task.
 * @interface
 */
interface TaskPriorityProps extends React.SpanHTMLAttributes<HTMLSpanElement> {
  /**
   * Indicates whether the task belongs to the "Done" column.
   * @member {boolean}
   */
  isDoneColumn: boolean;
  /**
   * The priority level of the task.
   * @member {TaskPriority}
   */
  priority: TaskPriority;

  /**
   * Callback function triggered when the priority is clicked.
   * @member {() => void}
   */
  onClick?: () => void;

  /**
   * Indicates whether the priority is selected.
   * @member {boolean}
   */
  isSelected?: boolean;
}
