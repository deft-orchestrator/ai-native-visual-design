import {
  Agent,
  AgentId,
  Bid,
  Task,
  TaskAnnouncement,
  TaskResult,
} from '@ai-design/types';

/**
 * An abstract base class that provides a default structure for all agents.
 * Specialized agents should extend this class and implement their specific logic.
 */
export abstract class BaseAgent implements Agent {
  id: AgentId;
  name: string;
  capabilities: string[];

  constructor(id: AgentId, name: string, capabilities: string[]) {
    this.id = id;
    this.name = name;
    this.capabilities = capabilities;
  }

  /**
   * A default bidding strategy. Can be overridden by subclasses.
   * This basic implementation checks if the agent has the required capabilities
   * and returns a generic bid if it does.
   */
  async bidOnTask(announcement: TaskAnnouncement): Promise<Bid | null> {
    // A real implementation would have more complex logic to check if the
    // agent can *actually* perform the task based on the specification.
    const canPerform = this.capabilities.some(cap => announcement.specification.type?.startsWith(cap));

    if (!canPerform) {
      return null;
    }

    return {
      agent: this,
      taskId: announcement.taskId,
      qualityScore: 0.7, // Default quality score
      estimatedTime: 100,  // Default time in ms
      estimatedCost: 10,   // Default cost
    };
  }

  /**
   * The primary execution method for an agent.
   * Subclasses must implement this method to perform their specific task.
   */
  abstract execute(task: Task): Promise<TaskResult>;
}