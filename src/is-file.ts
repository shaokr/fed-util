import _ from "lodash";
import fp from "lodash/fp";

const isBodyFilePrototype = (val: any) =>
  fp.includes(Object.prototype.toString.call(val))([
    "[object File]",
    "[object Blob]",
  ]);

// 判断参数类型是否含文件
const isBodyFile = (params: any) => {
  let result = false;
  const twoforEachObj: any = [];
  _.forEach(params, (val) => {
    if (typeof val !== "undefined" && isBodyFilePrototype(val)) {
      result = true;
      return false;
    } else if (typeof val === "object") {
      twoforEachObj.push(val);
    }
  });
  if (!result) {
    _.forEach(twoforEachObj, (val) => {
      result = isBodyFile(val);
      return !result;
    });
  }
  return result;
};
export default isBodyFile;
