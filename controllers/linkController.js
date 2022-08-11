const linkService = require("../services/linkServices");

exports.getLinkTbl = async function (req, res) {
  let result;

  if (req.query.colId) {
    let colId = JSON.stringify(req.query.colId);
    result = await linkService.readLinkCol(colId);
  } else {
    let tblId = [JSON.parse(req.query.tblId)];
    result = await linkService.readLinkTbl(tblId);
  }

  res.send(result);
};
