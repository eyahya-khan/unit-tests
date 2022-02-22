export const hackerSpeak = (words) => {
 
  return words.replace(/a/gi,'4') // here gi is global ignore
              .replace(/e/gi,'3') // means case insensitive
              .replace(/i/gi,'1')
              .replace(/o/gi,'0')
              .replace(/s/gi,'5');
}
