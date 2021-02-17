/**
 * @file Push Google Sheet data to a doc's table
 * @url
 */

/**
 * Run the snippet
 */
function run() {
  const data = [
    [1, 2, 3],
    [new Date(), 'est', 1],
    [new Date(), 'est', 2],
    [new Date(), 'est', 3],
    [new Date(), 'est', 4],
    [new Date(), 'est', 5],
    [new Date(), 'est', 6],
  ];
  const doc = DocumentApp.getActiveDocument();
  fillTable_(doc.getBody(), 0, data);
  doc.saveAndClose();
}

/**
 * Fills the passed table with a two-dimensional array. Avoids overstepping.
 * Take care of creating a full sized table in advance
 *
 * @param {GoogleAppsScript.Document.Body} body
 * @param {number} tableIndex
 * @param {Array.<Array.<object>>} data
 * @returns {GoogleAppsScript.Document.Table}
 */
function fillTable_(body, tableIndex, data) {
  const table = body.getTables()[tableIndex];
  const numRows = table.getNumRows();
  const numCells = table.getRow(numRows - 1).getNumCells();
  data.forEach((row, i) => {
    i < numRows &&
      row.forEach((value, j) => {
        j < numCells && table.getCell(i, j).setText(value);
      });
  });
  return table;
}
