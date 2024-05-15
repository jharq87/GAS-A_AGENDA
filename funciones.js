const idLb = "1XrF06J4sYhLkvJqmBKNB3j5TniIbbqA5c2F0u2yd1VA";
function doGet() {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Agenda")
    .setFaviconUrl("https://cdn-icons-png.flaticon.com/512/562/562152.png");
}

function cathHtml(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function getContact() {
  let lb = SpreadsheetApp.openById(
    idLb
  ).getSheetByName("Hoja 1");
  let dt = lb.getDataRange().getValues();
  return dt;
}
function formatDate(dateStr) {
  dateStr.toLocaleDateString("es-CL", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return dateStr;
}
