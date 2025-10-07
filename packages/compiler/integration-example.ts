// Contoh integrasi intent → compiler → ECS World
import { tokenize } from './Tokenizer';
import { parse } from './Parser';
import { optimize } from './Optimizer';
import { intentToECS } from './IntentToECSAdapter';
import { World } from '@ecs/World';

const intent = 'Buat logo modern biru';
const tokens = tokenize(intent);
const ast = optimize(parse(tokens));
const world = new World();
const entity = intentToECS(ast, world);

console.log('Intent:', intent);
console.log('Entity:', entity);
console.log('Components:', world.getComponents(entity));
