function doGet() {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Agenda")
    .setFaviconUrl("https://cdn-icons-png.flaticon.com/512/562/562152.png");
}

function cathHtml(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}
