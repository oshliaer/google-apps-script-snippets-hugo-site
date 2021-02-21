/**
 * @file Copy the template and replace text
 * @url https://ru.stackoverflow.com/questions/1073978
 */

/**
 * Run the snippet
 */
function run() {
  var doc = DocumentApp.getActiveDocument();
  var copy = copyAndReplace_(doc);
  Logger.log(copy);
}

/**
 *
 * @param {GoogleAppsScript.Document.Document} template
 * @return {GoogleAppsScript.Document.Document}
 */
function copyAndReplace_(template) {
  var copy = DriveApp.getFileById(template.getId()).makeCopy();
  var newDoc = DocumentApp.openById(copy.getId());
  newDoc.getBody().replaceText('a', ' <trehe is an `a`> ');
  newDoc.saveAndClose();
  return newDoc;
}
