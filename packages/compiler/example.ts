// Contoh penggunaan pipeline Creative Compiler
import { tokenize } from './Tokenizer';
import { parse } from './Parser';
import { optimize } from './Optimizer';
import { codegen } from './Codegen';

const intent = 'Buat logo modern biru';
const tokens = tokenize(intent);
const ast = parse(tokens);
const optimizedAst = optimize(ast);
const code = codegen(optimizedAst);

console.log('Intent:', intent);
console.log('Tokens:', tokens);
console.log('AST:', ast);
console.log('Optimized AST:', optimizedAst);
console.log('Generated Code:', code);
