/* global onEditAutosort1, onEditAutosort2 */
/**
 *
 * @param {GoogleAppsScript.Events.SheetsOnEdit} e
 */
function onEdit(e) {
  onEditAutosort1();
  onEditAutosort2(e);
}
