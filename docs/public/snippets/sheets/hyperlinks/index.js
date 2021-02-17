/**
 *
 */
function getHyperlinks() {
  const runs = SpreadsheetApp.getCurrentCell().getRichTextValue().getRuns();
  console.log(
    runs.reduce((c, run) => {
      const url = run.getLinkUrl();
      if (url) c.push(url);
      return c;
    }, [])
  );
}
