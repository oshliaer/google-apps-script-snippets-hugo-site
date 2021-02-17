/**
 * @file Creates a copy of file and sets its title
 * @url https://support.google.com/docs/thread/12032976?msgid=12032976
 */

/**
 * User action. Runs the snippet
 */
function run() {
  var changes = Drive.Changes.list();
  console.log(changes.items);
}
