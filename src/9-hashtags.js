export const hashtags = (text) => {
  const list = text.split(' ');
  return list.filter(item => item.substring(0,1) === "#");
  
}
