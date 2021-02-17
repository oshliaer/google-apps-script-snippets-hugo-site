/**
 * @file
 * @see {@link https://docs.google.com/spreadsheets/d/11Z1pT2y28Bwm6QikGMH_kB-MehuKak3liJ8b4bbTJ9E/edit?usp=sharing}
 * @see {@link https://qna.habr.com/q/778215}
 */

/* exported TESTCACHESERVICE */

/**
 * @OnlyCurrentDoc
 */

/**
 *
 * The TESTCACHESERVICE function
 *
 * @param {param} param
 * @return {number}
 * @customfunction
 */
function TESTCACHESERVICE(param) {
  const cache = CacheService.getScriptCache();
  const cached = param === 'break' ? 0 : +cache.get('cached') + 1 || 0;
  cache.put('cached', cached);
  return cached;
}
