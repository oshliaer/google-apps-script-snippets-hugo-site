/**
 * @file Dates Range Iterator
 */

/**
 * Prints 100 dates
 */
function run() {
  const start = new Date();
  const end = new Date();
  end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 100);
  const it = makeDatesRangeIterator(start, end);
  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
}

/* exported makeDatesRangeIterator */
/**
 *
 * @param {Date} start
 * @param {Date} end
 * @param {number} step ms
 */
function* makeDatesRangeIterator(start, end, step = 1000 * 60 * 60 * 24) {
  const _start_ = new Date(start);
  let iterationCount = 0;
  while (_start_ <= end) {
    iterationCount++;
    yield _start_;
    _start_.setTime(_start_.getTime() + step);
  }
  return iterationCount;
}
