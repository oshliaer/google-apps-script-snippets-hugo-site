function doGet() {
  return HtmlService.createTemplateFromFile('app')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
