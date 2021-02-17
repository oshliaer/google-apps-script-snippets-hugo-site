/**
 *
 */
function newRow() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var nextRow = sheet.getLastRow() + 1;
  var formula = '=B%s-A%s'.replace(/%s/g, nextRow);
  sheet.appendRow(['00:00:00', '00:00:00', formula]);
}
