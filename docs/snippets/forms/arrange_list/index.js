// https://support.google.com/docs/thread/86184354
/**
 * Arranges lists in Forms elements
 */
function run() {
  const form = FormApp.openById('1JInxW42UFZPSADPPw-qU9qPMSXYwrchtjqAoQHO3-7I');
  arrangeList(form.getItems()[1]);
}

/**
 *
 * @param {GoogleAppsScript.Forms.Item} item
 * @param {()} [compareFunction=compareFunction_]
 * @return {GoogleAppsScript.Forms.FormResponse}
 */
function arrangeList(item, compareFunction) {
  const asItem = ((item) => {
    return item[
      `as${
        {
          CHECKBOX: 'Checkbox',
          LIST: 'List',
          MULTIPLE_CHOICE: 'MultipleChoice',
        }[item.getType().toString()]
      }Item`
    ];
  })(item);

  return asItem
    ? asItem().setChoices(
        asItem()
          .getChoices()
          .sort(compareFunction || compareFunction_)
      )
    : undefined;
}

/**
 *
 * @param {GoogleAppsScript.Forms.Choice} firstEl
 * @param {GoogleAppsScript.Forms.Choice} secondEl
 * @return {any}
 */
function compareFunction_(firstEl, secondEl) {
  const firstElVal = firstEl.getValue();
  const secondElVal = secondEl.getValue();
  return firstElVal < secondElVal ? -1 : firstElVal > secondElVal ? 1 : 0;
}
