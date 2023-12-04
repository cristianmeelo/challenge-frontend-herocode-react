/**
 * Represents the properties for rendering the deadline of a task.
 * @interface
 */
interface TaskDeadlineProps {
  /**
   * The completion date of the task, represented as a Date object, string, or null if not completed.
   * @member {Date | string | null}
   */
  completionDate: Date | string | null;

  /**
   * Indicates whether the task belongs to the "Done" column.
   * @member {boolean}
   */
  isDoneColumn: boolean;
}

/**
 * Represents the properties for rendering the deadline with additional information about overdue status.
 * @interface
 */
interface DeadlineProps {
  /**
   * Indicates whether the task belongs to the "Done" column.
   * @member {boolean}
   */
  isDoneColumn: boolean;

  /**
   * Indicates whether the task is overdue.
   * @member {boolean}
   */
  isOverdue: boolean;
}
