/**
 * An Entity is a unique identifier, typically a number.
 */
export type Entity = number;

/**
 * A Component is a container for pure data.
 * It is represented as a plain object.
 */
export interface Component {
  // This is a marker interface. Components are just objects.
}

/**
 * Defines the structure of the ECS World, which manages entities, components, and systems.
 * This is an interface; the implementation will be in the `ecs` package.
 */
export interface World {
  /**
   * Creates a new entity and returns its ID.
   */
  createEntity(): Entity;

  /**
   * Adds a component to an entity.
   * @param entity - The ID of the entity.
   * @param componentName - The name of the component to add.
   * @param data - The component data.
   */
  addComponent<T extends Component>(entity: Entity, componentName: string, data: T): void;

  /**
   * Retrieves a component from an entity.
   * @param entity - The ID of the entity.
   * @param componentName - The name of the component to retrieve.
   * @returns The component data, or undefined if it doesn't exist.
   */
  getComponent<T extends Component>(entity: Entity, componentName: string): T | undefined;

  /**
   * Queries for all entities that have a specific set of components.
   * @param componentNames - An array of component names to query for.
   * @returns An array of entity IDs that match the query.
   */
  query(componentNames: string[]): Entity[];
}