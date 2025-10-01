import { Agent, AgentId } from '@ai-design/types';

/**
 * A simple in-memory registry for managing and discovering agents.
 */
export class AgentRegistry {
  private agents = new Map<AgentId, Agent>();

  /**
   * Registers a new agent with the system.
   * If an agent with the same ID already exists, it will be overwritten.
   * @param agent - The agent instance to register.
   */
  register(agent: Agent): void {
    this.agents.set(agent.id, agent);
  }

  /**
   * Unregisters an agent from the system.
   * @param agentId - The ID of the agent to remove.
   */
  unregister(agentId: AgentId): void {
    this.agents.delete(agentId);
  }

  /**
   * Retrieves an agent by its unique ID.
   * @param agentId - The ID of the agent to retrieve.
   * @returns The agent instance, or undefined if not found.
   */
  getAgent(agentId: AgentId): Agent | undefined {
    return this.agents.get(agentId);
  }

  /**
   * Finds all agents that have a specific capability.
   * @param capability - The capability to search for (e.g., 'color', 'layout.grid').
   * @returns An array of agent instances that have the specified capability.
   */
  findAgentsByCapability(capability: string): Agent[] {
    const matchingAgents: Agent[] = [];
    for (const agent of this.agents.values()) {
      if (agent.capabilities.includes(capability)) {
        matchingAgents.push(agent);
      }
    }
    return matchingAgents;
  }

  /**
   * Returns a list of all registered agents.
   * @returns An array of all agent instances.
   */
  listAllAgents(): Agent[] {
    return Array.from(this.agents.values());
  }
}