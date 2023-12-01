function isNumericalChar(char: string): boolean {
  const ZERO_CHAR_CODE = 48;
  const NINE_CHAR_CODE = 57;

  const charCode = char.charCodeAt(0);

  return charCode >= ZERO_CHAR_CODE && charCode <= NINE_CHAR_CODE; 
}

function getFirstNumber(word: string): number {
  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (isNumericalChar(char)) {
      return Number(char);
    }
  }
}

function getLastNumber(word: string): number {
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];

    if (isNumericalChar(char)) {
      return Number(char);
    }
  }
}

function getNumber(word: string): number {
  const firstNumber = getFirstNumber(word);
  const lastNumber = getLastNumber(word);

  return Number(`${firstNumber}${lastNumber}`);
}

function sumWords(words: string[]): number {
  let sum = 0;

  for (const word of words) {
    const isEmpty = word === '';

    if(isEmpty) break;

    const number = getNumber(word);

    sum += number;
  }

  return sum;
}

async function main() {
  const filePath = Deno.args[0];
  const input = await Deno.readTextFile(filePath)
  const words = input.split('\n');

  return sumWords(words);
}

main();
