// src/bin.js
const jpnToArabic = require("./converter");

module.exports = (str, format) => {
  const jpnEra = /(明治|大正|昭和|平成)/;
  let spliter = format === undefined ? "/" : format;

  // create an array for manipulation
  let baseElements = str
    .replace(/\s/g, "")
    .split("日")[0]
    .replace(/(年|月)/g, "/")
    .split(jpnEra)
    .filter(v => v != "");

  let arr = new Array();

  // convert jpn kanji-number to arabic number
  baseElements[1]
    .split("/")
    .map(v => arr.push(jpnToArabic(v === "元" ? (v = "一") : v)));

  // convert jpn era to numberinc year
  let fromJpnEra = baseElements[0]
    .replace(/明治/g, 1868 - 1)
    .replace(/大正/g, 1912 - 1)
    .replace(/昭和/g, 1926 - 1)
    .replace(/平成/g, 1989 - 1);

  // result Date [Year, Month, Day]
  let rDate = [
    parseInt(fromJpnEra) + parseInt(arr[0]),
    parseInt(arr[1]),
    parseInt(arr[2])
  ];

  let result =
    format === "j"
      ? rDate[0] + "年" + rDate[1] + "月" + rDate[2] + "日"
      : rDate.join(spliter);

  return result;
};
