const idLb = "1XrF06J4sYhLkvJqmBKNB3j5TniIbbqA5c2F0u2yd1VA";
const lb = SpreadsheetApp.openById(idLb);
function doGet(dts) {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Agenda")
    .setFaviconUrl("https://cdn-icons-png.flaticon.com/512/562/562152.png");
}
function doPost(dts) {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Agenda")
    .setFaviconUrl("https://cdn-icons-png.flaticon.com/512/562/562152.png");
}

function cathHtml(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function getContact() {
  let hj = lb.getSheetByName("Hoja 1");
  let dt = hj.getDataRange().getValues();
  return dt;
}

function insertContact(nombre, correo) {
  let hj = lb.getSheetByName("Hoja 1");
  hj.appendRow([nombre, correo]);
}
