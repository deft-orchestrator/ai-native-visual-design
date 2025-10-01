import { World as IWorld, Entity, Component } from '@ai-design/types';

/**
 * Manages all the entities, components, and systems in the ECS world.
 * This is a map-based implementation for simplicity and ease of use.
 */
export class World implements IWorld {
  private nextEntityID = 0;
  private entities = new Map<Entity, Map<string, Component>>();

  /**
   * Creates a new entity and returns its ID.
   * @returns The unique ID of the newly created entity.
   */
  createEntity(): Entity {
    const entity = this.nextEntityID++;
    this.entities.set(entity, new Map<string, Component>());
    return entity;
  }

  /**
   * Adds a component to a specific entity.
   * If a component of the same type already exists, it will be overwritten.
   * @param entity - The ID of the entity.
   * @param componentName - The name of the component (e.g., 'Transform', 'Style').
   * @param data - The data for the component.
   */
  addComponent<T extends Component>(entity: Entity, componentName: string, data: T): void {
    const components = this.entities.get(entity);
    if (!components) {
      // Or throw an error, depending on desired strictness
      return;
    }
    components.set(componentName, data);
  }

  /**
   * Retrieves a component from an entity by its name.
   * @param entity - The ID of the entity.
   * @param componentName - The name of the component to retrieve.
   * @returns The component data, or undefined if the entity or component does not exist.
   */
  getComponent<T extends Component>(entity: Entity, componentName: string): T | undefined {
    const components = this.entities.get(entity);
    return components?.get(componentName) as T | undefined;
  }

  /**
   * Queries for all entities that possess a given set of components.
   * @param componentNames - An array of component names required on an entity.
   * @returns An array of entity IDs that match the query.
   */
  query(componentNames: string[]): Entity[] {
    const matchingEntities: Entity[] = [];
    if (componentNames.length === 0) {
      return [];
    }

    for (const [entity, components] of this.entities.entries()) {
      if (componentNames.every(name => components.has(name))) {
        matchingEntities.push(entity);
      }
    }
    return matchingEntities;
  }
}