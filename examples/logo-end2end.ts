// End-to-end workflow: intent → compiler → ECS → SimpleWorkflow
import { tokenize } from '@compiler/Tokenizer';
import { parse } from '@compiler/Parser';
import { optimize } from '@compiler/Optimizer';
import { codegen } from '@compiler/Codegen';
import { intentToECS } from '@compiler/IntentToECSAdapter';
import { World } from '@ecs/World';
import { SimpleWorkflow } from '@agents-strategy/SimpleWorkflow';

const intent = 'Buat logo modern biru';
const tokens = tokenize(intent);
const ast = optimize(parse(tokens));
const code = codegen(ast);
const world = new World();
const entity = intentToECS(ast, world);
const workflow = new SimpleWorkflow();
const result = workflow.run(intent);

console.log('Intent:', intent);
console.log('Tokens:', tokens);
console.log('AST:', ast);
console.log('Generated Code:', code);
console.log('ECS Entity:', entity);
console.log('ECS Components:', world.getComponents(entity));
console.log('Workflow Feedback:', result.feedback);
