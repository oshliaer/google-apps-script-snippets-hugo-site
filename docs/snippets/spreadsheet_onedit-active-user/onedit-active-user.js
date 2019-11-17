/**
 * @file
 * {@link}
 */

/**
 * Runs the snippet.
 *
 * @param {GoogleAppsScript.Events.SheetsOnEdit} e
 */
function onedit(e) {
  e.range
    .offset(0, -1 * e.range.getColumn() + 1)
    .setValue(
      Session.getEffectiveUser().getEmail() +
        ' ' +
        Session.getActiveUser().getEmail()
    );
}

/**
 * Reset auth
 */
function reset() {
  ScriptApp.invalidateAuth();
}
