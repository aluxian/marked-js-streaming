import { marked } from 'marked';

// approx LLM tokens
const words = ['#', ' heading', '\n', '\n', '[', 'link', ']', '(', 'http', '://', 'google.com', ')', '\n'];

// accumulator
const lexer = new marked.Lexer();

for (const word of words) {
  const tokens = lexer.lex(word);
  console.log('\nAfter word:', JSON.stringify(word));
  console.log('Tokens:', JSON.stringify(tokens, null, 2));
}
