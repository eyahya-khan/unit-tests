/*
export const hashtags = (text) => {
  const list = text.split(' ');
  return list.filter(item => item.substring(0,1) === "#");
  
}
*/

export const hashtags = (text) => {
  return text.split(' ').filter(word => word.startsWith('#'))
}


/*
export const hashtags = (text) => text = text.match(/#\w+/gm);
*/


/*
export const hashtags = (text) => {
  return text.split(" ").filter((word) => word.charAt(0) === "#");
};
*/