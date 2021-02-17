/**
 *
 * @param {GoogleAppsScript.Events.FormsOnSubmit} e
 */
function omFormSubmit(e) {
  console.log(Object.keys(e), JSON.stringify(e.namedValues));
}
