/* exported run */

/**
 *
 */
function run() {
  const calendar = CalendarApp.getCalendarById(
    '1fq7choqdctaal2sk5i5du43qc@group.calendar.google.com'
  );
  console.log(clearAllEvents_(calendar));
}

/**
 *
 * @param {GoogleAppsScript.Calendar.Calendar} calendar
 */
function clearAllEvents_(calendar) {
  const marks = [];
  return calendar.getEvents(new Date(0), new Date()).map((event) => {
    const id = event.getId();
    if (!marks.includes(id))
      if (event.isRecurringEvent()) {
        calendar.getEventSeriesById(id).deleteEventSeries();
        marks.push(id);
      } else event.deleteEvent();
    return id;
  });
}
