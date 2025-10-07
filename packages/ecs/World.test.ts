// Unit test sederhana untuk ECS Core
import { World } from './World';
import { Transform } from './components/Transform';
import { Style } from './components/Style';
import { Text } from './components/Text';
import { LayoutSystem } from './systems/LayoutSystem';
import { RenderSystem } from './systems/RenderSystem';

describe('ECS World', () => {
  it('should create entity and add components', () => {
    const world = new World();
    const entity = world.addEntity();
    world.addComponent(entity, Transform({ x: 5, y: 10 }));
    world.addComponent(entity, Style({ color: '#fff' }));
    world.addComponent(entity, Text({ value: 'Test' }));
    expect(world.getComponents(entity).length).toBe(3);
  });

  it('should run systems and update components', () => {
    const world = new World();
    const entity = world.addEntity();
    world.addComponent(entity, Transform({ x: 0, y: 0 }));
    world.addSystem(new LayoutSystem());
    world.update();
    const transform = world.getComponents(entity).find(c => c.type === 'Transform');
    expect(transform?.data.x).toBe(10);
  });
});
