// Codegen: Menghasilkan kode dari AST
import { ASTNode } from './Parser';

export function codegen(ast: ASTNode): string {
  // Contoh: gabungkan semua value menjadi satu string kode
  if (!ast.children) return '';
  return ast.children.map((c) => c.value).join(' ');
}
