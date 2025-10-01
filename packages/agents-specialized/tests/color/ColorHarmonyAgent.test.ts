import { ColorHarmonyAgent } from '../../src/color/ColorHarmonyAgent';
import { AgentRegistry } from '@ai-design/core';

describe('ColorHarmonyAgent', () => {
  it('should be instantiated correctly', () => {
    const agent = new ColorHarmonyAgent();
    expect(agent).toBeInstanceOf(ColorHarmonyAgent);
    expect(agent.name).toBe('ColorHarmonyAgent');
    expect(agent.capabilities).toContain('color.harmony');
  });

  it('should be registrable with the AgentRegistry', () => {
    const registry = new AgentRegistry();
    const agent = new ColorHarmonyAgent();

    registry.register(agent);
    const retrievedAgent = registry.getAgent(agent.id);

    expect(retrievedAgent).toBe(agent);
  });

  it('should have the required StyleComponent defined', () => {
    const agent = new ColorHarmonyAgent();
    expect(agent.requiredComponents).toEqual(['StyleComponent']);
  });
});