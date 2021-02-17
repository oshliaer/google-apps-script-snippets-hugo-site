/**
 * @file Creates a file from the url
 */

/**
 * User action. Runs the snippet
 */
function run() {
  var url = 'https://www.spk.ru/pricelist/1';
  var contentType = MimeType.MICROSOFT_EXCEL;
  var file = createFileFromUrl_(url, contentType);
  file.setName('New Price');
  // file.setTrashed(true);
}

/**
 * Creates a file from the url
 *
 * @param {string} url A direct url to the file
 * @param {GoogleAppsScript.Base.MimeType} contentType A MimeType of the Blob
 * @return {GoogleAppsScript.Drive.File}
 */
function createFileFromUrl_(url, contentType) {
  var blob = UrlFetchApp.fetch(url).getBlob();
  if (contentType) blob.setContentType(contentType);
  return DriveApp.createFile(blob);
}
