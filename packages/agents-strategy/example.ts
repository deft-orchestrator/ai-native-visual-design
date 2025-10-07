// Contoh penggunaan SimpleWorkflow
import { SimpleWorkflow } from './SimpleWorkflow';

const workflow = new SimpleWorkflow();
const intent = 'Buat logo modern biru';
const result = workflow.run(intent);

console.log('AST:', result.ast);
console.log('Feedback:', result.feedback);
