/**
 * @file horizontal_align_samples
 * @url https://groups.google.com/forum/#!topic/google-apps-script-community/ohSPheOCD00
 */

/**
 * Run the snippet
 */
function runParagraphSample() {
  const doc = DocumentApp.getActiveDocument();
  horizontalAlignmentParagraph_(doc.getBody());
}

/**
 *
 * @param {GoogleAppsScript.Document.Body} body
 */
function horizontalAlignmentParagraph_(body) {
  const paragraph3 = body.insertParagraph(0, 'Center');
  const paragraph2 = body.insertParagraph(0, 'Left');
  const paragraph1 = body.insertParagraph(0, 'Right');

  paragraph1.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  paragraph2.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
  paragraph3.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
}
