/**
 * https://stackoverflow.com/questions/58723024/auto-sort-data-moved-by-script
 */
function AutoSortOnEdit() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Completed Returns');
  var range = sheet.getRange(
    4,
    1,
    sheet.getLastRow() - 1,
    sheet.getLastColumn()
  );
  range.sort({ column: 2, ascending: true });
}

function run() {
  copyData();
  AutoSortOnEdit();
}

function copyData() {}
