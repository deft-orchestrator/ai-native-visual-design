// SimpleWorkflow: Workflow sederhana menggunakan TranslatorAgent dan DebuggerAgent
import { tokenize } from '@compiler/Tokenizer';
import { TranslatorAgent } from '@agents-specialized/TranslatorAgent';
import { DebuggerAgent } from '@agents-specialized/DebuggerAgent';

export class SimpleWorkflow {
  run(intent: string): { ast: any; feedback: string[] } {
    const tokens = tokenize(intent);
    const translator = new TranslatorAgent();
    const ast = translator.translate(tokens);
    const debuggerAgent = new DebuggerAgent();
    const feedback = debuggerAgent.debug(ast);
    return { ast, feedback };
  }
}
