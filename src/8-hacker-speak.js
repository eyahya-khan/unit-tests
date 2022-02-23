export const hackerSpeak = (words) => {
 
  return words.replace(/a/gi,'4') // here gi is global ignore
              .replace(/e/gi,'3') // means case insensitive
              .replace(/i/gi,'1')
              .replace(/o/gi,'0')
              .replace(/s/gi,'5');
}



/*
export const hackerSpeak = (words) => {
  words = words.replace(/[aeios]/g, charactersToReplace=>({'a':'4','e':'3','i':'1','o':'0','s':'5'})
  [charactersToReplace]);  
    return words
  }
*/  