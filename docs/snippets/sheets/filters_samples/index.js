/**
 * @file Google Sheets Filters samples
 * @url https://support.google.com/docs/thread/41053434
 */

/**
 *
 */
function userActionSetfilter() {
  userActionRemoveFilter();
  const filterCriteria1 = SpreadsheetApp.newFilterCriteria().whenCellEmpty();
  const filterCriteria2 = SpreadsheetApp.newFilterCriteria().whenCellNotEmpty();

  SpreadsheetApp.getActiveSheet()
    .getDataRange()
    .createFilter()
    .setColumnFilterCriteria(1, filterCriteria1)
    .setColumnFilterCriteria(2, filterCriteria2);
}

/**
 *
 */
function userActionRemoveFilter() {
  const filter = SpreadsheetApp.getActiveSheet().getFilter();
  if (filter) filter.remove();
}

/**
 *
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('User menu')
    .addItem('Set filter', 'userActionSetfilter')
    .addItem('Remove filter', 'userActionRemoveFilter')
    .addToUi();
}
