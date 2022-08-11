const tblModel = require("../models/tblModel.js");
const colModel = require("../models/colModel.js");

exports.readTblName = async function () {
  try {
    const rawList = await tblModel.getTblList();
    const result = rawList;
    return result;
  } catch (err) {
    throw err;
  }
};

exports.readColName = async function (tblId) {
  try {
    const rawList = await colModel.getColByTbl(tblId);
    console.log(rawList);
    const groupByName = rawList.reduce(
      (h, obj) =>
        Object.assign(h, {
          [obj.description]: (h[obj.description] || []).concat(obj.id),
        }),
      {}
    );
    const result = [];
    Object.keys(groupByName).forEach((key, i, keys) => {
      result.push({
        id: groupByName[key],
        description: key,
      });
    });
    return result;
  } catch (err) {
    return err;
  }
};
