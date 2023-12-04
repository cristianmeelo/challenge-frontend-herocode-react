interface TaskDeadlineProps extends Pick<Task, 'completionDate'>, Pick<StyledTask, 'isDoneColumn'> {}

interface DeadlineProps extends Pick<TaskDeadlineProps, 'isDoneColumn'> {
  isOverdue: boolean;
}
