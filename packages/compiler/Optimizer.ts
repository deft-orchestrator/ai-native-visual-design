// Optimizer: Mengoptimalkan AST
import { ASTNode } from './Parser';

export function optimize(ast: ASTNode): ASTNode {
  // Contoh: hapus node kosong
  if (!ast.children) return ast;
  return {
    ...ast,
    children: ast.children.filter((c) => c.value && c.value.trim() !== ''),
  };
}
