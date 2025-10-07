// Unit test untuk SimpleWorkflow end-to-end
import { SimpleWorkflow } from './SimpleWorkflow';

describe('SimpleWorkflow', () => {
  it('should process intent and return valid AST and feedback', () => {
    const workflow = new SimpleWorkflow();
    const intent = 'Buat logo modern biru';
    const result = workflow.run(intent);
    expect(result.ast.type).toBe('Root');
    expect(result.ast.children.length).toBeGreaterThan(0);
    expect(result.feedback[0]).toContain('AST valid');
  });
});
