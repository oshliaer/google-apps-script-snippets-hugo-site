function forismatic() {
  return JSON.parse(
    UrlFetchApp.fetch(
      'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=ru'
    ).getContentText()
  )['quoteText'];
}
