/**
 *
 * @param {*} e
 */
function doGet(e) {
  var htmlTemplate = HtmlService.createTemplateFromFile('client');
  return htmlTemplate.evaluate();
}
