// Unit test untuk pipeline Creative Compiler
import { tokenize } from './Tokenizer';
import { parse } from './Parser';
import { optimize } from './Optimizer';
import { codegen } from './Codegen';

describe('Creative Compiler Pipeline', () => {
  it('should tokenize intent string', () => {
    const tokens = tokenize('Buat logo modern biru');
    expect(tokens.length).toBeGreaterThan(0);
    expect(tokens[0]).toHaveProperty('type', 'word');
  });

  it('should parse tokens to AST', () => {
    const tokens = tokenize('Buat logo');
    const ast = parse(tokens);
    expect(ast.type).toBe('Root');
    expect(ast.children?.length).toBe(tokens.length);
  });

  it('should optimize AST', () => {
    const tokens = tokenize('Buat   logo');
    const ast = parse(tokens);
    const optimized = optimize(ast);
    expect(optimized.children?.every(c => c.value && c.value.trim() !== '')).toBe(true);
  });

  it('should generate code from AST', () => {
    const tokens = tokenize('Buat logo modern');
    const ast = parse(tokens);
    const optimized = optimize(ast);
    const code = codegen(optimized);
    expect(typeof code).toBe('string');
    expect(code).toContain('Buat');
    expect(code).toContain('logo');
  });
});
