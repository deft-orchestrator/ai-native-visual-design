// System: Logika murni yang memproses Entity dan Component
import { World } from './World';

export interface System {
  update(world: World): void;
}
