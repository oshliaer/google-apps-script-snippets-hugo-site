/**
 * @file Exporting Spreadsheets to files
 */

/**
 *
 */
function run() {
  Logger.log(
    exportSpreadsheetToFile_(
      '1TpHUfTvA7xBi4TLnWaplGasDumauA3YyMgXjXeQ2cyo',
      'tsv'
    )
  );
}

/**
 *
 */
function runSheet() {
  var spec = ['COUNTIF'];

  var spreadsheet = SpreadsheetApp.openById(
    '1TpHUfTvA7xBi4TLnWaplGasDumauA3YyMgXjXeQ2cyo'
  ).copy('tmp');

  spec.forEach(function(sheetName) {
    var dr = spreadsheet.getSheetByName(sheetName).getDataRange();
    dr.setValues(dr.getValues());
  });
  spreadsheet.getSheets().forEach(function(sheet) {
    if (spec.indexOf(sheet.getName()) < 0) spreadsheet.deleteSheet(sheet);
  });
  var spreadsheetId = spreadsheet.getId();
  var file = exportSpreadsheetToFile_(spreadsheetId, 'xlsx');
  DriveApp.getFileById(spreadsheetId).setTrashed(true);
  return file;
}

/**
 * Exports the spreadsheet to a file on Drive
 *
 * @param {string} spreadsheetId Spreadhseet ID
 * @param {string} type MimeType or extension
 * @returns {GoogleAppsScript.Drive.File}
 */
function exportSpreadsheetToFile_(spreadsheetId, type) {
  /* globals __SNIPPETS__TYPES__EXPORT__SHEET__ */
  var type_ = __SNIPPETS__TYPES__EXPORT__SHEET__[type];
  var url = Drive.Files.get(spreadsheetId).exportLinks[type_];
  var blob = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    }
  });
  var file = DriveApp.createFile(blob);
  return file;
}

(function(scope) {
  var TYPES = {
    'application/x-vnd.oasis.opendocument.spreadsheet':
      'application/x-vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.spreadsheet':
      'application/vnd.oasis.opendocument.spreadsheet',
    ods: 'application/x-vnd.oasis.opendocument.spreadsheet',
    'text/tab-separated-values': 'text/tab-separated-values',
    tsv: 'text/tab-separated-values',
    'application/pdf': 'application/pdf',
    pdf: 'application/pdf',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv': 'text/csv',
    csv: 'text/csv',
    'application/zip': 'application/zip',
    zip: 'application/zip'
  };
  scope.__SNIPPETS__TYPES__EXPORT__SHEET__ = TYPES;
})(this);
