let arrayThrough = function (length) {
  return Array.from(new Array(length).keys(), k => ++k);
};
let getTimeStamp = function () {
  return new Date().valueOf();
};
let getRandomString = () => (Math.random().toString(36).substr(2)).replace(/\d*\D(\d*)?/,"");
let addStyle = function (selector, style) {
  let styleText = `${selector}${JSON.stringify(style).replace(/"/g, '').replace(/,/g, ';')}`;
  try {
    let head = document.getElementsByTagName('head')[0];
    let styleNode = document.createElement('style');
    styleNode.type = 'text/css';
    styleNode.appendChild(document.createTextNode(styleText));
    head.appendChild(styleNode);
    return styleText;
  } catch (e) {
    return styleText;
  }
};
export {arrayThrough, getTimeStamp, addStyle, getRandomString};