/**
 * Copies a template and builds a new Form
 */
function run() {
  const form = FormApp.openById('1JInxW42UFZPSADPPw-qU9qPMSXYwrchtjqAoQHO3-7I');
  console.log(submitResponse_(form).getEditResponseUrl());
}

/**
 *
 * @param {GoogleAppsScript.Forms.Form} form
 * @return {GoogleAppsScript.Forms.FormResponse}
 */
function submitResponse_(form) {
  const response = form.createResponse();

  const text = form.getItems()[1].asTextItem();

  const itemText = text.createResponse('asdfasdf');

  const mch = form.getItems()[0].asMultipleChoiceItem();

  const itemMch = mch.createResponse('Russia');

  return response.withItemResponse(itemText).withItemResponse(itemMch).submit();
}
