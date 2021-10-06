# MorseCode
  Un proyecto para traducir texto a código morse y código morse a texto, utilizando TypeScript.

## Documentación
### Morse Encode
  Para el uso de la librería se tomará un separador por default que es el espacio, sin empargo se podrá agregar algún separador custom o utilizar los ya configurados.

  **Nota: El símbolo de grado (°) no está permitido como un separador válido.**

    Separadores Configurados:
    -pa --parenthesis   Separa las palabras entre paréntesis ().
    -sh --sharp        Separa las palabras entre signo de número #.
    -as --asterisk      Separa las palabras entre asteriscos *.
    -pi --pipe          Separa las palabras entre plecas |.

La misma posee una función llamada `morseEncode()` la cual toma dos parámetros, uno es el string que posee el texto para convertir en morse y el otro el separador.
  #### Ejemplo
  ````sh
  // Imprimir la palabra Hello en Código Morse con el separador por default.
  import { MorseCode } from 'morse-code';
  let morseCode = new MorseCode();
  console.log(morseCode.morseEncode('Hello'));

  // Imprimir la palabra Hello en Código Morse con un separador custom.
  import { MorseCode } from 'morse-code';
  let morseCode = new MorseCode();
  console.log(morseCode.morseEncode('Hello', '/'));
  ````

### Morse Decode
// TODO: Implementación de Morse Decode pendiente para próxima versión debido a estar fuera del alcance inicial.


## Autor
| Name                 |  Contribution   |  Email                        |
|----------------------|-----------------|-------------------------------|
| Jack Pacheco         |  Developer      |  jackdamiolixp@gmail.com      |