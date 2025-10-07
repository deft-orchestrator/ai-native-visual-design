// Parser: Membangun AST dari token
import { Token } from './Tokenizer';

export type ASTNode = {
  type: string;
  value?: string;
  children?: ASTNode[];
};

export function parse(tokens: Token[]): ASTNode {
  // Contoh sederhana: satu node per token
  return {
    type: 'Root',
    children: tokens.map((t) => ({ type: 'Token', value: t.value })),
  };
}
