import { World } from '../src/World';
import { Component } from '@ai-design/types';

// Define some simple components for testing
interface Position extends Component {
  x: number;
  y: number;
}

interface Velocity extends Component {
  dx: number;
  dy: number;
}

describe('World', () => {
  let world: World;

  beforeEach(() => {
    world = new World();
  });

  it('should create a new entity with a unique ID', () => {
    const entity1 = world.createEntity();
    const entity2 = world.createEntity();
    expect(entity1).toBe(0);
    expect(entity2).toBe(1);
    expect(entity1).not.toBe(entity2);
  });

  it('should add a component to an entity', () => {
    const entity = world.createEntity();
    const position: Position = { x: 10, y: 20 };
    world.addComponent(entity, 'Position', position);

    const retrieved = world.getComponent<Position>(entity, 'Position');
    expect(retrieved).toBeDefined();
    expect(retrieved).toEqual(position);
  });

  it('should return undefined when getting a non-existent component', () => {
    const entity = world.createEntity();
    const retrieved = world.getComponent<Position>(entity, 'Position');
    expect(retrieved).toBeUndefined();
  });

  it('should overwrite an existing component when adding a new one of the same type', () => {
    const entity = world.createEntity();
    const position1: Position = { x: 10, y: 20 };
    const position2: Position = { x: 50, y: 60 };

    world.addComponent(entity, 'Position', position1);
    world.addComponent(entity, 'Position', position2);

    const retrieved = world.getComponent<Position>(entity, 'Position');
    expect(retrieved).toEqual(position2);
  });

  it('should query for entities with a single component', () => {
    const entity1 = world.createEntity();
    world.addComponent<Position>(entity1, 'Position', { x: 0, y: 0 });

    const entity2 = world.createEntity();
    world.addComponent<Velocity>(entity2, 'Velocity', { dx: 1, dy: 1 });

    const entity3 = world.createEntity();
    world.addComponent<Position>(entity3, 'Position', { x: 5, y: 5 });

    const positionEntities = world.query(['Position']);
    expect(positionEntities).toHaveLength(2);
    expect(positionEntities).toContain(entity1);
    expect(positionEntities).toContain(entity3);
  });

  it('should query for entities with multiple components', () => {
    const entity1 = world.createEntity();
    world.addComponent<Position>(entity1, 'Position', { x: 0, y: 0 });
    world.addComponent<Velocity>(entity1, 'Velocity', { dx: 1, dy: 1 });

    const entity2 = world.createEntity();
    world.addComponent<Position>(entity2, 'Position', { x: 5, y: 5 });

    const movingEntities = world.query(['Position', 'Velocity']);
    expect(movingEntities).toHaveLength(1);
    expect(movingEntities).toContain(entity1);
  });

  it('should return an empty array when querying for components that no entity has', () => {
    const entity1 = world.createEntity();
    world.addComponent<Position>(entity1, 'Position', { x: 0, y: 0 });

    const movingEntities = world.query(['Position', 'Velocity']);
    expect(movingEntities).toHaveLength(0);
  });

  it('should return an empty array when querying with no component names', () => {
    world.createEntity();
    const entities = world.query([]);
    expect(entities).toHaveLength(0);
  });
});