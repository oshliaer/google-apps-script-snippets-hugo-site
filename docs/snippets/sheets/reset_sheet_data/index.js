/**
 * @file A snippet for .
 * Examples of the snippet {@link https://support.google.com/docs/thread/5809954?msgid=5809954}
 */

/**
 * Runs the snippet.
 * Removes rows by condition 'B:B=10'. Appends deleted rows to the 'Archive' sheet.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Reset sheet')
    .addItem(
      'Reset active sheet (ContactPrice example)',
      'userActionResetActiveSheetByRangesAddresses'
    )
    .addItem('Reset ranges', 'userActionResetRangesByRangesAddresses')
    .addItem(
      'Reset multiple sheets',
      'userActionResetMultipleSheetsByRangesAddresses'
    )
    .addItem(
      'Reset "GSM" columns',
      'userActionResetMultipleSheetsBySpecialColumns'
    )
    .addItem('Reset to a specific value', 'userActionResetToSpecificValue')
    .addItem('Make a copy before reset', 'userActionMakeCopyBeforeReset')
    .addToUi();
}

/**
 * Clear specifing cells on the active sheet
 */
function userActionResetActiveSheetByRangesAddresses() {
  var sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getName() !== 'ContactPrice') {
    SpreadsheetApp.getActive().toast('Please, activate "ContactPrice" sheet');
    return;
  }
  var rangesAddressesList = ['B5', 'B7', 'B9', 'B11', 'B15', 'B19'];
  resetByRangesList_(sheet, rangesAddressesList);
}

/**
 * Clear specifing ranges
 */
function userActionResetRangesByRangesAddresses() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Reset ranges example');
  sheet.activate();
  var rangesAddressesList = ['B5:B15', 'B19'];
  resetByRangesList_(sheet, rangesAddressesList);
}

/**
 * Clear specifing sheets
 */
function userActionResetMultipleSheetsByRangesAddresses() {
  var sheetNames = [
    { name: 'Sheet1', rangesAddressesList: ['B5:B15', 'B19'] },
    { name: 'Sheet2', rangesAddressesList: ['A1:Z20'] },
  ];
  sheetNames.forEach(function(sn) {
    var sheet = SpreadsheetApp.getActive().getSheetByName(sn.name);
    if (sheet) {
      resetByRangesList_(sheet, sn.rangesAddressesList);
    }
  });
}

/**
 * Clear specifing sheets by color
 */
function userActionResetMultipleSheetsByColor() {
  var fColor = '#fa7d00';
  var sheetNames = [
    // { name: 'Sheet1' },
    { name: 'Reset by color (click the image)' },
  ];
  sheetNames.forEach(function(sn) {
    var sheet = SpreadsheetApp.getActive().getSheetByName(sn.name);
    if (sheet) {
      var rangesAddressesList = sheet
        .getDataRange()
        .getFontColors()
        .reduce(function(p, row, i) {
          var colors = row.reduce(function(p2, color, j) {
            if (color === fColor)
              p2.push(Utilities.formatString('R%sC%s', i + 1, j + 1));
            return p2;
          }, []);
          if (colors.length) p = p.concat(colors);
          return p;
        }, []);
      if (rangesAddressesList.length)
        resetByRangesList_(sheet, rangesAddressesList);
    }
  });
}

/**
 * Cleaning the sheet and special columns
 */
function userActionResetMultipleSheetsBySpecialColumns() {
  SpreadsheetApp.getActive()
    .getSheets()
    .forEach(function(sheet) {
      var lastRow = sheet.getLastRow();
      var rangesAddressesList = sheet
        .getRange('2:2')
        .getValues()[0]
        .reduce(function(p, cell, i) {
          if (cell === 'GSA')
            p.push(
              Utilities.formatString('R3C%s:R%sC%s', i + 1, lastRow, i + 1)
            );
          return p;
        }, []);
      if (rangesAddressesList.length) {
        sheet.activate(); // Please remove this
        resetByRangesList_(sheet, rangesAddressesList);
      }
    });
}

/**
 * Reset to specific values
 */
function userActionResetToSpecificValue() {
  var sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getName() !== 'ContactPrice') {
    SpreadsheetApp.getActive().toast('Please, activate "ContactPrice" sheet');
    return;
  }
  var rangesAddressesList = ['B5', 'B7', 'B9', 'B11', 'B15', 'B19'];
  resetByRangesListToValue_(sheet, rangesAddressesList, 'CLEARED');
}

/**
 * Clear the sheet by the range list
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet The sheet
 * @param {Array.<string>} rangesAddressesList The list of ranges to return, as specified in A1 notation or R1C1 notation.
 */
function resetByRangesList_(sheet, rangesAddressesList) {
  sheet.getRangeList(rangesAddressesList).clearContent();
}

/**
 * Reset the sheet by the range list to a value
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet The sheet
 * @param {Array.<string>} rangesAddressesList The list of ranges to return, as specified in A1 notation or R1C1 notation.
 */
function resetByRangesListToValue_(sheet, rangesAddressesList, value) {
  value = value || '';
  sheet.getRangeList(rangesAddressesList).setValue(value);
}
