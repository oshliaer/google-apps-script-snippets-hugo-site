/**
 * @file The URL constructor
 * @url https://developer.mozilla.org/en-US/docs/Web/API/URL
 */

/* globals URL */
/* exported userActionRun */

/**
 * User action. Runs the snippet
 */
function userActionRun() {
  // Base urls
  var m = 'https://developer.mozilla.org';
  var a = new URL('/', m); // => 'https://developer.mozilla.org/'
  Logger.log(a.toString());
  var b = new URL(m); // => 'https://developer.mozilla.org/'
  Logger.log(b.toString());
  var d = new URL('/en-US/docs', b); // => 'https://developer.mozilla.org/en-US/docs'
  Logger.log(d.toString());
  Logger.log(new URL('//foo.com', 'https://example.com').toString()); // => 'https://foo.com' (see relative URLs)
}
