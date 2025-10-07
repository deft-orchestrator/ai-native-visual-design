// QueryEngine: Pencarian komponen secara efisien
import { World } from './World';
import { Component } from './Component';
import { Entity } from './Entity';

export class QueryEngine {
  constructor(private world: World) {}

  findEntitiesByComponentType(type: string): Entity[] {
    return this.world.getEntities().filter(entity =>
      this.world.getComponents(entity).some(c => c.type === type)
    );
  }

  getComponentData(entity: Entity, type: string): any {
    const comps = this.world.getComponents(entity);
    const comp = comps.find(c => c.type === type);
    return comp ? comp.data : undefined;
  }
}
