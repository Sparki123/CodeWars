decodeMorse = function(morseCode){
  return morseCode.trim().split('  ').map(word => word.split(' ').map(str => MORSE_CODE[str]).join('')).join(' ')
}