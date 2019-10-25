/* exported run */

/**
 * Runs the example
 * @ignore
 */
function run() {
  var url =
    'https://raw.githubusercontent.com/contributorpw/google-apps-script-snippets/master/snippets/standalone_driveapp-save-file-to-drive-from-web/standalone_driveapp-save-file-to-drive-from-web.js';
  Logger.log(saveFileToDriveByUrl_(url).getId());
}

/**
 *
 * @param {string} url The file source url
 * @return {GoogleAppsScript.Drive.File}
 */
function saveFileToDriveByUrl_(url) {
  var httpResponse = UrlFetchApp.fetch(url);
  var blob = httpResponse.getBlob();
  var file = DriveApp.createFile(blob);
  return file;
}
