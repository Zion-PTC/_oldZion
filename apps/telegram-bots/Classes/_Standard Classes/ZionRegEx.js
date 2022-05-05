export class ZionRegEx {}
Object.assign(ZionRegEx, RegExp);
// Static RegExp
ZionRegEx.folderNameFromFolderPath = /\w+$/g;
ZionRegEx.valueBetweenSymbols = /((?<=[/]))(.*?)(?=\.)/;
ZionRegEx.getFileFromPath = /(?<=[/])\w*[.]\w*/g;
ZionRegEx.catchTheFirstWord = /^([\w]+)/g;
ZionRegEx.siCaseUnsensitive = /si/gi;
ZionRegEx.botCaseUnsensitive = /bot/gi;
ZionRegEx.checkFirstSlach = /(^\/)/i;
ZionRegEx.firstAndLast3 = /^.{3}?|.{3}?$/g;
ZionRegEx.uuid =
  /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/g;
// Static Methods
ZionRegEx.firstAndLastDyn = (string = '', span) => {
  let stringPattern = `^.{${span}}}?|.{${span}}?$`;
  const flag = 'g';
  return string.match(new RegExp(stringPattern, flag));
};
