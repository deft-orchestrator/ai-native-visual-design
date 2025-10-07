// DebuggerAgent: Memeriksa AST dan memberikan feedback
import { ASTNode } from '@compiler/Parser';

export class DebuggerAgent {
  debug(ast: ASTNode): string[] {
    // Contoh: feedback jika AST kosong
    if (!ast.children || ast.children.length === 0) {
      return ['AST kosong, intent tidak diproses.'];
    }
    return ['AST valid, jumlah node: ' + ast.children.length];
  }
}
