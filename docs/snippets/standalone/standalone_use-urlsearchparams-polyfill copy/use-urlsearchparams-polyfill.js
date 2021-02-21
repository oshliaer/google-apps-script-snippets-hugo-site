/**
 * @file The URLSearchParams constructor
 * @url https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 */

/* globals URLSearchParams, URL */
/* exported userActionRun */

/**
 *
 * @param {*} e
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('app');
}

/**
 * User action. Runs the snippet
 */
function userActionRun() {
  var paramsString = 'q=URLUtils.searchParams&topic=api';
  var searchParams = new URLSearchParams(paramsString);

  // Iterate the search parameters.
  // eslint-disable-next-line guard-for-in
  for (var p in searchParams) {
    Logger.log(p);
  }

  Logger.log(searchParams.has('topic') === true); // true
  Logger.log(searchParams.get('topic') === 'api'); // true
  Logger.log(searchParams.getAll('topic')); // ["api"]
  Logger.log(searchParams.get('foo') === null); // true
  Logger.log(searchParams.append('topic', 'webdev'));
  Logger.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
  Logger.log(searchParams.set('topic', 'More webdev'));
  Logger.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
  Logger.log(searchParams['delete']('topic'));
  Logger.log(searchParams.toString()); // "q=URLUtils.searchParams"
  // Gotchas
  // The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.

  var paramsString1 = 'http://example.com/search?query=%40';
  var searchParams1 = new URLSearchParams(paramsString1);

  Logger.log(searchParams1.has('query')); // false
  Logger.log(searchParams1.has('http://example.com/search?query')); // true

  Logger.log(searchParams1.get('query')); // null
  Logger.log(searchParams1.get('http://example.com/search?query')); // "@" (equivalent to decodeURIComponent('%40'))

  var paramsString2 = '?query=value';
  var searchParams2 = new URLSearchParams(paramsString2);
  Logger.log(searchParams2.has('query')); // true

  var url = new URL('http://example.com/search?query=%40');
  var searchParams3 = new URLSearchParams(url.search);
  Logger.log(searchParams3.has('query')); // true
}
