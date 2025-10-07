// Contoh penggunaan ECS
import { World } from './World';
import { Transform, TransformData } from './components/Transform';
import { Style, StyleData } from './components/Style';
import { Text, TextData } from './components/Text';
import { LayoutSystem } from './systems/LayoutSystem';
import { RenderSystem } from './systems/RenderSystem';

const world = new World();

const entity = world.addEntity();
world.addComponent(entity, Transform({ x: 0, y: 0 }));
world.addComponent(entity, Style({ color: '#3498db', border: '1px solid #222' }));
world.addComponent(entity, Text({ value: 'Hello AIVDL', font: 'Arial', size: 24 }));

world.addSystem(new LayoutSystem());
world.addSystem(new RenderSystem());

console.log('Sebelum update:');
console.log(world.getComponents(entity));

world.update();

console.log('Setelah update:');
console.log(world.getComponents(entity));
