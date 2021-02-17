/* exported SPREADSHEET_ID, run */

/** @constant SPREADSHEET_ID The spreadsheet id */
var SPREADSHEET_ID = '{{YOUR_SPREADSHEET_ID}}';

/**
 * Runs the example
 * @ignore
 */
function run() {
  var data = SpreadsheetApp.openById(SPREADSHEET_ID)
    .getSheets()[0]
    .getDataRange()
    // or .getDisplayValues()
    .getValues();
  Logger.log(dataToHtmltable_(data));
}

/**
 * Create HTML table from a 2d Array
 *
 * @param {Array.<Array.<object>>} data The Spreadsheet data
 * @return {string} HTML-string
 */
function dataToHtmltable_(data) {
  return JSON.stringify(data, null, '  ')
    .replace(/^\[/g, '<table>')
    .replace(/\]$/g, '</table>')
    .replace(/^\s\s\[$/gm, '<tr>')
    .replace(/^\s\s\],{0,1}$/gm, '</tr>')
    .replace(/^\s{4}"{0,1}(.*?)"{0,1},{0,1}$/gm, '<td>$1</td>');
}
