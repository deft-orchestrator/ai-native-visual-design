// RenderSystem: Menyiapkan data untuk rendering
import { System } from '../System';
import { World } from '../World';

export class RenderSystem implements System {
  update(world: World): void {
    for (const entity of world.getEntities()) {
      const comps = world.getComponents(entity);
      // Simulasi: tampilkan data komponen di console
      console.log(`Entity ${entity}:`, comps);
    }
  }
}
