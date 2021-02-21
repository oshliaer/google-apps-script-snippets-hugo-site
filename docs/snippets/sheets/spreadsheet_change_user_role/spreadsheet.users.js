/* exported SPREADSHEET_ID, EDITOR_EMAIL, run */

/** ID Таблицы */
var SPREADSHEET_ID = '{{YOUR_SPREADSHEET_ID}}';

/** The user's email */
var EDITOR_EMAIL = '{{EDITOR_EMAIL}}';

/**
 * Runs the example
 * @ignore
 */
function run() {
  changeUserRole_(SpreadsheetApp.openById(SPREADSHEET_ID), EDITOR_EMAIL);
}

/**
 *
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet
 * @param {string} email
 */
function changeUserRole_(spreadsheet, email) {
  spreadsheet.removeEditor(email);
  spreadsheet.addViewer(email);
}
