/* "runtimeVersion": "STABLE" */

/**
 * @param {GoogleAppsScript.Events.SheetsOnChange} e
 */
function asdfsd() {
  // SpreadsheetApp.getActive();
  // SlidesApp.get.getActivePresentation();

  // console.log(
  //   ['Spreadsheet', 'Document', 'Slides'].map(app =>
  //     this[`${app}App`].getActive()
  //   )
  // );
  console.log(this['Slides' + 'App']['getActivePresentation']());
}
