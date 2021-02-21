/**
 * @file Timebased trigger daily exact
 * @url https://www.facebook.com/groups/googleappsscript/permalink/548100505739510/
 * @url https://qna.habr.com/q/789131
 */

/**
 *
 */
function runOnce() {
  trigger_();
}

/**
 *
 */
function trigger_() {
  try {
    triggerAction();
  } catch (error) {
    console.error(error.message, error);
  } finally {
    var hours = 10;
    var minutes = 17;
    var seconds = 56;
    var now = new Date();
    var nextTime = new Date();
    nextTime.setHours(0, 0, 24 * 3600 + hours * 3600 + minutes * 60 + seconds);
    var delta = nextTime.getTime() - now.getTime();
    ScriptApp.newTrigger('trigger_').timeBased().after(delta).create();
  }
}

/**
 *
 */
function triggerAction() {
  console.log("I'm fine");
}
