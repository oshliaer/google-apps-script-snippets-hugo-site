/* eslint-disable no-unused-vars */
/**
 * @file
 */

/**
 * @OnlyCurrentDoc
 */

/* exported LET */

/**
 *
 * The LET function assigns names to calculation results.
 *
 * @param {name1} name1 Argument name
 * @param {value1} value1 Argument value
 * @param {[name2]} name2 Argument name
 * @param {[value2]} value2 Argument value
 * @param {calculation} calculation Calculation for current arguments
 * @return {any | any[]} Return numbers are translated into words
 * @customfunction
 */
function LET(name1, value1, name2, value2, calculation) {
  try {
    const args = [...arguments];
    const cmd = args.pop();
    const params = args.reduce((p, c, i, arr) => {
      if (i % 2 === 0) p[c] = arr[i + 1];
      return p;
    }, {});
    return eval(`({${Object.keys(params)}}) => { return ${cmd}; }`)(params);
  } catch (err) {
    return err.message;
  }
}
