import _ from "lodash";

export const gt = (value: string, other: string) => {
  const valueList = _.split(value, ".");
  const otherList = _.split(other, ".");
  let result = false;
  _.forEach(valueList, (val, index) => {
    const _otherVal = _.get(otherList, [index], 0);
    if (_.lt(val, _otherVal)) {
      return false;
    }
    if (_.gt(val, _otherVal)) {
      result = true;
      return false;
    }
  });
  return result;
};
export const eq = (value: string, other: string) => {
  let valueList = _.split(value, ".");
  let otherList = _.split(other, ".");
  if (valueList.length < otherList.length) {
    let a = valueList;
    valueList = otherList;
    otherList = a;
  }
  let result = !!valueList.length;
  _.forEach(valueList, (val, index) => {
    const _otherVal = _.get(otherList, [index], 0);
    if (!(val == _otherVal)) {
      result = false;
      return false;
    }
  });
  return result;
};

export const gte = (value: string, other: string) =>
  eq(value, other) || gt(value, other);

export const lt = (value: string, other: string) => !gte(value, other);

export default class {}
