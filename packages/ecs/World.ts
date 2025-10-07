// World: Kontainer utama ECS
import { Entity, createEntity } from './Entity';
import { Component } from './Component';
import { System } from './System';

export class World {
  private entities: Set<Entity> = new Set();
  private components: Map<Entity, Component[]> = new Map();
  private systems: System[] = [];

  addEntity(): Entity {
    const entity = createEntity();
    this.entities.add(entity);
    return entity;
  }

  addComponent(entity: Entity, component: Component): void {
    if (!this.components.has(entity)) {
      this.components.set(entity, []);
    }
    this.components.get(entity)!.push(component);
  }

  addSystem(system: System): void {
    this.systems.push(system);
  }

  update(): void {
    for (const system of this.systems) {
      system.update(this);
    }
  }

  getComponents(entity: Entity): Component[] {
    return this.components.get(entity) || [];
  }

  getEntities(): Entity[] {
    return Array.from(this.entities);
  }
}
