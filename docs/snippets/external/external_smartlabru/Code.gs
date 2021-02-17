/**
 *
 * @param param
 */
function getIO(param) {
  param = param || {};
  var _ = {};
  _.type = param.type || 'D';
  _.url = param.url || '';

  switch (_.type.toUpperCase()) {
    case 'D':
      _.url = 'http://smart-lab.ru/indeks-optimizma//download/';
      break;
    case 'W':
      _.url = 'http://smart-lab.ru/indeks-optimizma//download_week/';
  }
  var fetch = UrlFetchApp.fetch(_.url);
  var csv = fetch.getBlob().getDataAsString('Windows-1251');
  csv = csv.replace(/(;\d+),(\d+;)/g, '$1.$2');
  csv = csv.replace(/<.*>/g, '');
  csv = csv.replace(/^\s*[\r\n]/gm, '');
  var values = Utilities.parseCsv(csv, ';');
  return values;
}
