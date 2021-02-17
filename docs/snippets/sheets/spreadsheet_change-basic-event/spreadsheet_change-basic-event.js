/**
 * @file
 * {@link }
 */

/**
 * Runs the snippet.
 * Please, register this function for CHANGE event
 * once from the owner of the Spreadsheet
 *
 * @param {GoogleAppsScript.Events.SheetsOnChange} e
 */
function onchange(e) {
  try {
    var log = e.source.getSheetByName('log') || e.source.insertSheet('log');
    log.appendRow([new Date(), JSON.stringify(e, null, '  ')]);
  } catch (error) {
    console.error('error', error);
  }
}
