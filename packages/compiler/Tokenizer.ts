// Tokenizer: Memecah intent kreatif menjadi token
export type Token = { type: string; value: string };

export function tokenize(input: string): Token[] {
  // Contoh sederhana: pisahkan kata dan simbol
  const regex = /([a-zA-Z]+|\d+|[^\s\w])/g;
  const matches = input.match(regex) || [];
  return matches.map((value) => ({ type: 'word', value }));
}
