// IntentToECSAdapter: Mengubah AST/kode menjadi entitas dan komponen ECS
import { ASTNode } from './Parser';
import { World } from '@ecs/World';
import { Transform } from '@ecs/components/Transform';
import { Style } from '@ecs/components/Style';
import { Text } from '@ecs/components/Text';

export function intentToECS(ast: ASTNode, world: World): number {
  // Contoh sederhana: jika AST mengandung kata 'logo', buat entitas dengan komponen dasar
  const values = ast.children?.map(c => c.value?.toLowerCase() || '') || [];
  if (values.includes('logo')) {
    const entity = world.addEntity();
    world.addComponent(entity, Transform({ x: 0, y: 0 }));
    world.addComponent(entity, Style({ color: '#3498db' }));
    world.addComponent(entity, Text({ value: 'Logo Modern', font: 'Arial', size: 32 }));
    return entity;
  }
  // Default: buat entitas kosong
  return world.addEntity();
}
