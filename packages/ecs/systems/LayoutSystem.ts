// LayoutSystem: Mengatur tata letak
import { System } from '../System';
import { World } from '../World';
import { TransformData } from '../components/Transform';

export class LayoutSystem implements System {
  update(world: World): void {
    // Contoh logika layout: geser semua entitas ke kanan 10px
    for (const entity of world.getEntities()) {
      const comps = world.getComponents(entity);
      const transform = comps.find(c => c.type === 'Transform');
      if (transform) {
        (transform.data as TransformData).x += 10;
      }
    }
  }
}
