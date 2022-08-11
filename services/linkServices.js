const linkModel = require("../models/linkModel.js");
const colModel = require("../models/colModel.js");
const tblModel = require("../models/tblModel.js");

exports.readLinkTbl = async function (tblId) {
  try {
    let linkList = [];
    const tblName = await tblModel.getTblList(tblId.map((id) => id - 100000));
    const colName = await colModel.getColByTbl(tblId - 100000);
    console.log(tblName);
    linkList.push(...tblName);
    linkList.push(...colName);
    const colIds = colName.map((curr) => curr.id);
    const res = await linkModel.getTblLink(colIds);
    linkList.push(...res);
    const result = linkList;
    return result;
  } catch (err) {
    throw err;
  }
};

exports.readLinkCol = async function (colId) {
  try {
    let linkList = [];
    const colName = await colModel.getColList(colId);
    const colIds = colName.map((curr) => curr.id);
    const tblIds = colName.map((curr) => curr.parent - 100000);
    const tblName = await tblModel.getTblList(tblIds);
    console.log(tblName);
    linkList.push(...tblName);
    linkList.push(...colName);
    const res = await linkModel.getTblLink(colIds);
    console.log(res);
    console.log(linkList);
    linkList.push(...res);
    const result = linkList;
    return result;
  } catch (err) {
    throw err;
  }
};
