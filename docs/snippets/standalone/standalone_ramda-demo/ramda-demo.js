/* globals R  */
/**
 *
 */
function run() {
  // `prop` takes two arguments. If I just give it one, I get a function back
  var moo = R.prop('moo');
  // when I call that function with one argument, I get the result.
  var value = moo({ moo: 'cow' }); // => 'cow'
  Logger.log(value);
}
