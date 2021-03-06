import test from "ava";
// import lib from "./src/bin";
import lib from "./index";
const log = console.log;

// create tesing elements
const addEr = era => {
  let el = [
    "元年一月四日", // 1-01-04 : 0
    "元年十月一四日", // 1-10-14 : 1
    "元年十月十四日", // 1-10-14 : 2
    "元年十一月四日", // 1-11-04 : 3
    "四年十一月四日", // 4-11-04 : 4
    "十年十一月二〇日", // 10-11-20 : 5
    "二十年十一月二〇日", // 20-11-20 : 6
    "二六年七月二八日", // 26-07-28 : 7
    "二十六年七月二十八日", // 26-07-28 : 8
    "六十四年一月二日", // 64-01-02 : 9
    "六十四年　一月二日", // 64-01-02 : 10 * containing 2byte sapce
    "六十四年 一月二日", // 64-01-02 : 11 * containing space
    "元年三月二日", // 1-03-02 :12
    "元年年三月二日" // 1-03-02 :13 //invalid
  ];

  let arr = [];

  el.map(v => arr.push(era + v));

  return arr;
};

// convert year from defined of year
const year = (num, sub) => {
  return sub === undefined ? num : num - 1 + sub;
};

test("meiji(明治) test", t => {
  let tEl = addEr("明治"); // create test elements
  let y = 1868; // beginning of year

  t.is(lib(tEl[0], "/"), year(y) + "/01/04");

  t.is(lib(tEl[0]), year(y) + "-01-04");
  t.is(lib(tEl[1]), year(y) + "-10-14");
  t.is(lib(tEl[2]), year(y) + "-10-14");
  t.is(lib(tEl[3]), year(y) + "-11-04");
  t.is(lib(tEl[4]), year(y, 4) + "-11-04");
  t.is(lib(tEl[5]), year(y, 10) + "-11-20");
  t.is(lib(tEl[6]), year(y, 20) + "-11-20");
  t.is(lib(tEl[7]), year(y, 26) + "-07-28");
  t.is(lib(tEl[8]), year(y, 26) + "-07-28");
  t.is(lib(tEl[12]), year(y) + "-03-02");
});

test("taisho(大正) test", t => {
  let tEl = addEr("大正"); // create test elements
  let y = 1912; // beginning of year of Taishow

  t.is(lib(tEl[0]), year(y) + "-01-04");
  t.is(lib(tEl[1]), year(y) + "-10-14");
  t.is(lib(tEl[2]), year(y) + "-10-14");
  t.is(lib(tEl[3]), year(y) + "-11-04");
  t.is(lib(tEl[4]), year(y, 4) + "-11-04");
  t.is(lib(tEl[5]), year(y, 10) + "-11-20");
});

test("shouwa(昭和) test", t => {
  let tEl = addEr("昭和"); // create test elements
  let y = 1926; // beginning of year of showa

  t.is(lib(tEl[0]), year(y) + "-01-04");
  t.is(lib(tEl[1]), year(y) + "-10-14");
  t.is(lib(tEl[2]), year(y) + "-10-14");
  t.is(lib(tEl[3]), year(y) + "-11-04");
  t.is(lib(tEl[4]), year(y, 4) + "-11-04");
  t.is(lib(tEl[5]), year(y, 10) + "-11-20");
  t.is(lib(tEl[6]), year(y, 20) + "-11-20");
  t.is(lib(tEl[7]), year(y, 26) + "-07-28");
  t.is(lib(tEl[8]), year(y, 26) + "-07-28");
  t.is(lib(tEl[9]), year(y, 64) + "-01-02");
});

test("heisei(平成) test", t => {
  let tEl = addEr("平成"); // create test elements
  let y = 1989; // beginning of year of Heisei

  t.is(lib(tEl[0]), year(y) + "-01-04");
  t.is(lib(tEl[1]), year(y) + "-10-14");
  t.is(lib(tEl[2]), year(y) + "-10-14");
  t.is(lib(tEl[3]), year(y) + "-11-04");
  t.is(lib(tEl[4]), year(y, 4) + "-11-04");
  t.is(lib(tEl[5]), year(y, 10) + "-11-20");
  t.is(lib(tEl[7]), year(y, 26) + "-07-28");
  t.is(lib(tEl[8]), year(y, 26) + "-07-28");
});

test("reiwa(令和) test", t => {
  let tEl = addEr('令和'); // create test elements
  let y = 2019; // beginning of year of Reiwa

  t.is(lib(tEl[0]), year(y) + "-01-04");
  t.is(lib(tEl[1]), year(y) + "-10-14");
  t.is(lib(tEl[2]), year(y) + "-10-14");
  t.is(lib(tEl[3]), year(y) + "-11-04");
  t.is(lib(tEl[4]), year(y, 4) + "-11-04");
  t.is(lib(tEl[5]), year(y, 10) + "-11-20");
  t.is(lib(tEl[7]), year(y, 26) + "-07-28");
  t.is(lib(tEl[8]), year(y, 26) + "-07-28");

});

test("format", t => {
  let tEl = addEr("昭和"); // create test elements
  let y = 1926; // beginning of showa

  t.is(lib(tEl[0], "/"), year(y) + "/01/04");
  t.is(lib(tEl[0], "j"), year(y) + "年1月4日"); // 1926年1月4日
});

test("space test", t => {
  let tEl = addEr("昭和"); // create test elements
  let y = 1926; // beginning of year

  t.is(lib(tEl[10]), year(y, 64) + "-01-02");
  t.is(lib(tEl[11]), year(y, 64) + "-01-02");
});
