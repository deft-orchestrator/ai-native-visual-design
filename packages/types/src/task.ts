/**
 * Represents a unique identifier for a task.
 */
export type TaskId = string;

/**
 * Defines a unit of work to be performed by an agent.
 */
export interface Task {
  id: TaskId;
  /**
   * The type of task, which helps coordinators find capable agents.
   * e.g., 'design.color.harmonize', 'layout.grid.generate'
   */
  type: string;

  /**
   * The input data or specification for the task.
   * The structure of this object is specific to the task type.
   */
  specification: any;

  /**
   * Contextual information that might influence how the task is performed.
   */
  context?: {
    [key: string]: any;
  };

  /**
   * Requirements or constraints for the task execution.
   */
  requirements?: {
    maxTime?: number; // Maximum time in milliseconds.
    resourceBudget?: number; // A budget for computational resources.
    qualityThreshold?: number; // A minimum quality score (0-1).
  };
}