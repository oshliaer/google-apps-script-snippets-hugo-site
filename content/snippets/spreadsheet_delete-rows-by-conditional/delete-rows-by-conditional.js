/**
 * @file A snippet for deleting rows from a Google Sheet by condition.
 * Examples of the snippet {@link https://webapps.stackexchange.com/a/133308/}
 */

/**
 * Runs the snippet.
 * Removes rows by condition 'B:B=10'.
 * @ignore
 */
function run() {
  var sheet = SpreadsheetApp.getActiveSheet();
  deleteRowsByConditional_(sheet, function(row) {
    return row[1] === 10;
  });
}

/**
 * Runs the snippet.
 * Removes rows by condition 'B:B=10'. Appends deleted rows to the 'Archive' sheet.
 */
function run2() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var archive = SpreadsheetApp.getActive().getSheetByName('Archive');

  var action = function(values, i, i2) {
    var data = values.slice(values.length - i - i2, values.length - i); // It's reversed
    archive
      .getRange(archive.getLastRow() + 1, 1, data.length, data[0].length)
      .setValues(data);
  };

  var condition = function(row) {
    return row[1] === 'asdf';
  };

  deleteRowsByConditional_(sheet, condition, action);
}

/**
 * Removes rows from a sheet according to the condition
 *
 * @function
 * @name deleteRowsByConditional_
 * @example
 * // Removes all rows where B column contains 10
 * deleteRowsByConditional_(SpreadsheetApp.getActiveSheet(),
 *   function(currentValue){
 *     return currentValue[1] === 10;
 *   }
 * );
 *
 * @param {Sheet} sheet - Represents the Sheet that is changing.
 * @param {conditionCallback} condition - The callback that should return true/false state for each row.
 * @param {dataCallback} action - The callback that exec with current removed rows.
 **/
function deleteRowsByConditional_(sheet, condition, action) {
  var values = sheet.getDataRange().getValues();
  values.unshift([]);
  values.reverse().forEach(
    function() {
      var i = this.l - arguments[1];
      if (this.condition.apply(null, [arguments[0], i, arguments[2]])) {
        this.isContinue++;
      } else if (this.isContinue) {
        if (action) action(arguments[2], i, this.isContinue);
        this.sheet.deleteRows(i, this.isContinue);
        this.isContinue = 0;
      }
    },
    { sheet: sheet, condition: condition, isContinue: 0, l: values.length }
  );
}

/**
 * Returns true/false state for each row.
 *
 * @callback conditionCallback
 * @param {Array} currentValue - The current row of the DataRange
 * @param {Number} index - The index of the current row. The DataRange is reversed!
 * @param {Array} array - The DataRange. The DataRange is reversed!
 **/

/**
 * Exec with current removed rows.
 *
 * @callback dataCallback
 * @param {Array} array - The DataRange. The DataRange is reversed!
 * @param {Number} index - The index of the current row. The DataRange is reversed!
 * @param {Number} index2 - The index2 of the current row. The DataRange is reversed!
 **/
