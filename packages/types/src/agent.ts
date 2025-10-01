import { World } from './ecs';
import { Task } from './task';

/**
 * Represents a unique identifier for an agent.
 */
export type AgentId = string;

/**
 * Base interface for all agents in the system.
 */
export interface Agent {
  id: AgentId;
  name: string;
  capabilities: string[];

  /**
   * Allows an agent to bid on a task announcement.
   * @param announcement - The task details being broadcast.
   * @returns A promise that resolves to a Bid or null if the agent cannot perform the task.
   */
  bidOnTask(announcement: TaskAnnouncement): Promise<Bid | null>;

  /**
   * Executes a given task.
   * @param task - The task to be executed.
   * @returns A promise that resolves to the result of the task.
   */
  execute(task: Task): Promise<TaskResult>;
}

/**
 * An agent that interacts directly with the ECS world.
 */
export interface ECSAgent extends Agent {
  /**
   * Specifies the components an entity must have for this agent to process it.
   */
  requiredComponents: string[];

  /**
   * Processes a set of entities within the ECS world.
   * @param entities - The entities that match the required components query.
   * @param world - The current state of the ECS world.
   * @param task - The high-level task providing context.
   */
  processEntities(entities: number[], world: World, task: Task): Promise<void>;
}

/**
 * Represents a task announcement broadcast by a coordinator.
 */
export interface TaskAnnouncement {
  taskId: string;
  specification: any;
  deadline?: number;
  budget?: number;
}

/**
 * Represents a bid submitted by an agent for a task.
 */
export interface Bid {
  agent: Agent;
  taskId: string;
  qualityScore: number; // A score from 0 to 1 indicating the expected quality.
  estimatedTime: number; // Estimated time in milliseconds.
  estimatedCost: number; // Estimated resource cost.
}

/**
 * Represents the result of a task execution.
 */
export interface TaskResult {
  taskId: string;
  status: 'success' | 'failure' | 'partial';
  output?: any;
  error?: string;
}