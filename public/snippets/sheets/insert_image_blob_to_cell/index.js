/* global DocsServiceApp */

/**
 * @file
 * @see
 *   {@link https://qna.habr.com/q/931697}
 *   {@link https://github.com/tanaikech/DocsServiceApp}
 */

/**
 * Insert an image blob to the cell
 */
function userActionRun() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const blob = UrlFetchApp.fetch(
    'https://contributor.pw/img/post/sheets/sheets_mmult-some-uses-cases_01.png'
  ).getBlob();
  insertImageBlobToCell_(sheet, blob);
}

/**
 * Insert a single image to the cell. A1 is default
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param {GoogleAppsScript.Base.Blob} blob
 * @param {number} row
 * @param {number} column
 */
function insertImageBlobToCell_(sheet, blob, row = 1, column = 1) {
  const sheetName = sheet.getName();
  const parentId = sheet.getParent().getId();
  return DocsServiceApp.openBySpreadsheetId(parentId)
    .getSheetByName(sheetName)
    .insertImage([{ blob, range: { row, column } }]);
}
