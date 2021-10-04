import { MorseCode } from '../src/app';
import { expect } from 'chai';

describe('MorseCode', () => {

  // it('Should return an invalid message with invalid input', () => {
  //   let morseCode = new MorseCode();
  //   expect(morseCode.morseEncode(123535)).to.equal('Invalid Input');
  // });

  // it('Should return an invalid message with invalid separator', () => {
  //   let morseCode = new MorseCode();
  //   expect(morseCode.morseEncode('Hello', 123)).to.equal('Invalid Separator');
  // });

  it('Should return an empty string with empty input', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('')).to.equal('');
  });

  it('Should return an empty string with invalid characters', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('# $ % - ! + = ? < > ~ | { } [ ] * ^')).to.equal('');
  });

  // Space is the default separator
  it('Should return valid value with default separator (.... . .-.. .-.. ---) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello')).to.equal('.... . .-.. .-.. ---');
  });

  // Custom separator is the user indication
  it('Should return valid value with custom separator (...././.-../.-../---) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '/')).to.equal('...././.-../.-../---');
  });

  // Integrated separator is a previows and special separator preconfigured

  // Parenthesis
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-p')).to.equal('(....) (.) (.-..) (.-..) (---)');
  });
  it('Should return valid value with integrated separator ((....) (.) (.-..) (.-..) (---)) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--parenthesis')).to.equal('(....) (.) (.-..) (.-..) (---)');
  });

  // Sharp
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-s')).to.equal('#....# #.# #.-..# #.-..# #---#');
  });
  it('Should return valid value with integrated separator (#....# #.# #.-..# #.-..# #---#) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--sharp')).to.equal('#....# #.# #.-..# #.-..# #---#');
  });

  // Asterisk
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '-a')).to.equal('*....* *.* *.-..* *.-..* *---*');
  });
  it('Should return valid value with integrated separator (*....* *.* *.-..* *.-..* *---*) with Hello word', () => {
    let morseCode = new MorseCode();
    expect(morseCode.morseEncode('Hello', '--asterisk')).to.equal('*....* *.* *.-..* *.-..* *---*');
  });
});