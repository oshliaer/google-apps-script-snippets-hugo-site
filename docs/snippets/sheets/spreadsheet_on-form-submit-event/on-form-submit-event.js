/**
 *
 * @param {GoogleAppsScript.Events.FormsOnSubmit} e
 */
function onFormSubmit(e) {
  console.log(Object.keys(e), JSON.stringify(e.namedValues));
}
