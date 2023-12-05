/**
 * Represents the properties for rendering the priority of a task.
 * @interface
 */
interface TaskPriorityProps extends React.SpanHTMLAttributes<HTMLSpanElement>{
  /**
   * The priority level of the task.
   * @member {TaskPriority}
   */
  priority: TaskPriority;
  onClick?: ()=> void;
}
