import { MorseCode } from '../src/app';
import { expect } from 'chai';

describe('MorseCode', () => {

  // it('Should return an invalid message with invalid input', () => {
  //   let morseCode = new MorseCode();
  //   expect(morseCode.morseEncode(123535)).to.equal('Invalid Input');
  // });

  it('Should return an invalid message with invalid separator (°)', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '°')).to.equal('Invalid Separator');
  });

  it('Should return an empty string with empty input', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('')).to.equal('');
  });

  it('Should return an empty string with invalid characters', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('# $ % - ! + = ? < > ~ | { } [ ] * ^')).to.equal('');
  });

  it('Should return only valid values despite the string has invalid characters', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('# $ % - ! + = ? < > ~ | { } [ ] * ^ Hello')).to.equal('.... . .-.. .-.. ---');
  });

  // Space is the default separator
  it('Should return valid value with default separator (.... . .-.. .-.. ---) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello')).to.equal('.... . .-.. .-.. ---');
  });

  it('Should return valid value with default separator (.... . .-.. .-.. ---  .-- --- .-. .-.. -..) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World')).to.equal('.... . .-.. .-.. ---  .-- --- .-. .-.. -..');
  });

  // Custom separator is the user indication
  it('Should return valid value with custom separator (...././.-../.-../---) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '/')).to.equal('...././.-../.-../---');
  });

  it('Should return valid value with custom separator (...././.-../.-../--- .--/---/.-./.-../-..) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '/')).to.equal('...././.-../.-../---/ .--/---/.-./.-../-..');
  });

  // Integrated separator is a previows and special separator preconfigured

  // Parenthesis
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-pa')).to.equal('(....) (.) (.-..) (.-..) (---)');
  });
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--parenthesis')).to.equal('(....) (.) (.-..) (.-..) (---)');
  });
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..)) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '-pa')).to.equal('(....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..)');
  });
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..)) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '--parenthesis')).to.equal('(....) (.) (.-..) (.-..) (---)  (.--) (---) (.-.) (.-..) (-..)');
  });

  // Sharp
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-sh')).to.equal('#....# #.# #.-..# #.-..# #---#');
  });
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--sharp')).to.equal('#....# #.# #.-..# #.-..# #---#');
  });
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '-sh')).to.equal('#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#');
  });
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '--sharp')).to.equal('#....# #.# #.-..# #.-..# #---#  #.--# #---# #.-.# #.-..# #-..#');
  });

  // Asterisk
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-as')).to.equal('*....* *.* *.-..* *.-..* *---*');
  });
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--asterisk')).to.equal('*....* *.* *.-..* *.-..* *---*');
  });
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '-as')).to.equal('*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*');
  });
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '--asterisk')).to.equal('*....* *.* *.-..* *.-..* *---*  *.--* *---* *.-.* *.-..* *-..*');
  });

  // Pipe
  it('Should return valid value with integrated separator (|....| |.| |.-..| |.-..| |---|) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-pi')).to.equal('|....| |.| |.-..| |.-..| |---|');
  });
  it('Should return valid value with integrated separator (|....| |.| |.-..| |.-..| |---|) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--pipe')).to.equal('|....| |.| |.-..| |.-..| |---|');
  });
  it('Should return valid value with integrated separator (|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '-pi')).to.equal('|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|');
  });
  it('Should return valid value with integrated separator (|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|) with Hello World word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello World', '--pipe')).to.equal('|....| |.| |.-..| |.-..| |---|  |.--| |---| |.-.| |.-..| |-..|');
  });
});