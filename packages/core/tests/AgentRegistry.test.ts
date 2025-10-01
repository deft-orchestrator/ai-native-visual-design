import { AgentRegistry } from '../src/AgentRegistry';
import { BaseAgent } from '../src/BaseAgent';
import { Task, TaskResult } from '@ai-design/types';

// A concrete implementation of BaseAgent for testing purposes
class MockAgent extends BaseAgent {
  constructor(id: string, name: string, capabilities: string[]) {
    super(id, name, capabilities);
  }

  async execute(task: Task): Promise<TaskResult> {
    return {
      taskId: task.id,
      status: 'success',
      output: `Mock task ${task.id} completed by ${this.name}`,
    };
  }
}

describe('AgentRegistry', () => {
  let registry: AgentRegistry;
  let agent1: MockAgent;
  let agent2: MockAgent;

  beforeEach(() => {
    registry = new AgentRegistry();
    agent1 = new MockAgent('agent-1', 'ColorAgent', ['color', 'color.harmony']);
    agent2 = new MockAgent('agent-2', 'LayoutAgent', ['layout', 'layout.grid']);
  });

  it('should register an agent', () => {
    registry.register(agent1);
    const retrieved = registry.getAgent('agent-1');
    expect(retrieved).toBe(agent1);
  });

  it('should return undefined for a non-existent agent', () => {
    const retrieved = registry.getAgent('non-existent-agent');
    expect(retrieved).toBeUndefined();
  });

  it('should list all registered agents', () => {
    registry.register(agent1);
    registry.register(agent2);
    const allAgents = registry.listAllAgents();
    expect(allAgents).toHaveLength(2);
    expect(allAgents).toContain(agent1);
    expect(allAgents).toContain(agent2);
  });

  it('should unregister an agent', () => {
    registry.register(agent1);
    let retrieved = registry.getAgent('agent-1');
    expect(retrieved).toBeDefined();

    registry.unregister('agent-1');
    retrieved = registry.getAgent('agent-1');
    expect(retrieved).toBeUndefined();
  });

  it('should find agents by a specific capability', () => {
    const agent3 = new MockAgent('agent-3', 'AdvancedColorAgent', ['color', 'color.accessibility']);
    registry.register(agent1);
    registry.register(agent2);
    registry.register(agent3);

    const colorAgents = registry.findAgentsByCapability('color');
    expect(colorAgents).toHaveLength(2);
    expect(colorAgents).toContain(agent1);
    expect(colorAgents).toContain(agent3);
  });

  it('should find agents by a more specific capability', () => {
    const agent3 = new MockAgent('agent-3', 'AdvancedColorAgent', ['color', 'color.accessibility']);
    registry.register(agent1);
    registry.register(agent2);
    registry.register(agent3);

    const harmonyAgents = registry.findAgentsByCapability('color.harmony');
    expect(harmonyAgents).toHaveLength(1);
    expect(harmonyAgents).toContain(agent1);
  });

  it('should return an empty array if no agents match a capability', () => {
    registry.register(agent1);
    registry.register(agent2);

    const animationAgents = registry.findAgentsByCapability('animation');
    expect(animationAgents).toHaveLength(0);
  });
});