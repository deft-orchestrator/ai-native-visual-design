// TranslatorAgent: Menerjemahkan intent menjadi AST
import { Token } from '@compiler/Tokenizer';
import { ASTNode } from '@compiler/Parser';

export class TranslatorAgent {
  translate(tokens: Token[]): ASTNode {
    // Contoh: satu node per token
    return {
      type: 'Root',
      children: tokens.map((t) => ({ type: 'Token', value: t.value })),
    };
  }
}
