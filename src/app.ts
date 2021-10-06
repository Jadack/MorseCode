export class MorseCode {
  morseCode: any;
  constructor() {
    this.morseCode = {
      a: '.-',
      b: '-...',
      c: '-.-.',
      d: '-..',
      e: '.',
      f: '..-.',
      g: '--.',
      h: '....',
      i: '..',
      j: '.---',
      k: '-.-',
      l: '.-..',
      m: '--',
      n: '-.',
      o: '---',
      p: '.--.',
      q: '--.-',
      r: '.-.',
      s: '...',
      t: '-',
      u: '..-',
      v: '...-',
      w: '.--',
      x: '-..-',
      y: '-.--',
      z: '--..',
      1: '.----',
      2: '..---',
      3: '...--',
      4: '....-',
      5: '.....',
      6: '-....',
      7: '--...',
      8: '---..',
      9: '----.',
      0: '-----',
      '.': '.-.-.-',
      ',': '--..--',
      ';': '-.-.-.',
      ':': '---...',
      '(': '-.--.',
      ')': '-.--.-',
      '@': '.--.-.',
    };
  }

  morseEncode(text: string, separator: string = ' '): string {
    let translatedText: string = '';
    if (typeof text !== 'string') {
      translatedText = 'Invalid Input';
    } else if (typeof separator !== 'string' || separator === '°') {
      translatedText = 'Invalid Separator';
    } else {
      text.split(' ').map((a) => {
        a.split('').forEach((b) => {
          typeof this.morseCode[b.toLowerCase()] !== 'undefined'
            ? separator === '-pa' || separator === '--parenthesis'
              ? (translatedText += `(${this.morseCode[b.toLowerCase()]}) `)
              : separator === '-sh' || separator === '--sharp'
              ? (translatedText += `#${this.morseCode[b.toLowerCase()]}# `)
              : separator === '-as' || separator === '--asterisk'
              ? (translatedText += `*${this.morseCode[b.toLowerCase()]}* `)
              : separator === '-pi' || separator === '--pipe'
              ? (translatedText += `|${this.morseCode[b.toLowerCase()]}| `)
              : (translatedText += `${this.morseCode[b.toLowerCase()]}${separator}`)
            : (translatedText += '°');
        });
        translatedText += ' ';
      });
      translatedText = translatedText.replace(/\° /g, '').slice(0, -2);
    }
    return translatedText;
  }

  morseDecode(text: string, separator: string = ''): string {
    let translatedText: string = '';
    translatedText = text;
    return translatedText;
  }
}
