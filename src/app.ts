export class MorseCode {

  morseCode: any;
  constructor() { 
    this.morseCode = {
      'a': '.-',
      'b': '-...',
      'c': '-.-.',
      'd': '-..',
      'e': '.',
      'f': '..-.',
      'g': '--.',
      'h': '....',
      'i': '..',
      'j': '.---',
      'k': '-.-',
      'l': '.-..',
      'm': '--',
      'n': '-.',
      'o': '---',
      'p': '.--.',
      'q': '--.-',
      'r': '.-.',
      's': '...',
      't': '-',
      'u': '..-',
      'v': '...-',
      'w': '.--',
      'x': '-..-',
      'y': '-.--',
      'z': '--..',
      '1': '.----',
      '2': '..---',
      '3': '...--',
      '4': '....-',
      '5': '.....',
      '6': '-....',
      '7': '--...',
      '8': '---..',
      '9': '----.',
      '0': '-----',
      '.': '.-.-.-',
      ',': '--..--',
      ';': '-.-.-.',
      ':': '---...',
      '(': '-.--.',
      ')': '-.--.-',
      '@': '.--.-.'
    }
  }

  morseEncode(text: string, separator: string = ' '): string {
    let translatedText: string = '';
    if(typeof text !== 'string') {
      translatedText = 'Invalid Input';
    } else if(typeof separator !== 'string') {
      translatedText = 'Invalid Separator';
    } else {
      text.replace(/\s/g, '').toLowerCase().split('').forEach(w => {
        if(typeof this.morseCode[w] === 'undefined') {
          return translatedText += '';
        } else {
          if(separator === '-p' || separator === '--parenthesis') {
            translatedText += `(${this.morseCode[w]}) `;
          } else if(separator === '-s' || separator === '--sharp'){
            translatedText += `#${this.morseCode[w]}# `
          } else if(separator === '-a' || separator === '--asterisk') {
            translatedText += `*${this.morseCode[w]}* `
          } else {
            translatedText += `${this.morseCode[w]}${separator}`;
          }
        }
      });
    }
    return translatedText.slice(0, -1);;
  }

  morseDecode(text: string, separator: string = ''): string {
    let traslatedText: string = '';
    return traslatedText;
  }
}