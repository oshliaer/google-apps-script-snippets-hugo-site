/**
 * @file
 * @see
 * {@link https://support.google.com/docs/thread/38580496}
 * {@link https://qna.habr.com/q/790185}
 */

/*
Generate TOC
 =ARRAYFORMULA(HYPERLINK(
  "#gid="&GETSHEETS("SheetId",A1)
  ,GETSHEETS("Name",A1)
))
*/

/**
 * Custom formula
 */
function GETSHEETS(cmd) {
  return SpreadsheetApp.getActive()
    .getSheets()
    .map((sheet) => [sheet[`get${cmd}`]()]);
}
/**
 *
 * @param {*} nota
 */
function GETFORMULA(nota) {
  const sheet = SpreadsheetApp.getActiveSheet().getName();
  const list = SpreadsheetApp.getActive()
    .getSheets()
    .map((sheet) => sheet.getName())
    .filter((name) => name !== sheet)
    .map((name) => `'${name}'!${nota}`)
    .join('; ');
  return `=QUERY({${list}};"where Col1<>''";)`;
}
