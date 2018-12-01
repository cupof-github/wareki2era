// src/converter.js

module.exports = jpnEra => {
  let digits = ["十", "百", "千"];
  let jpnNumber = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  let arabicNúmerals = [...Array(10).keys()];

  let zero = [];
  let zCount = 0;

  let number = [];
  let nCount = 0;

  let total = 0;

  for (var i = 0; i < jpnEra.length; i++) {
    if (zero[zCount] == null) zero[zCount] = 0;

    if (number[nCount] == null) number[nCount] = 0;

    //一二三四五六七八九〇
    for (var v = 0; v < jpnNumber.length; v++) {
      if (jpnEra[i] == jpnNumber[v]) {
        zero[zCount] = zero[zCount] + arabicNúmerals[v];
        if (
          jpnEra[i + 1] != null &&
          jpnEra[i + 1].match(/[一二三四五六七八九〇]/)
        ) {
          zero[zCount] = zero[zCount] * 10;
        }
      }
    } // 0..9

    // 10, 100, 1000
    for (v = 0; v < digits.length; v++) {
      if (jpnEra[i] == digits[v]) {
        if (zero[zCount] == 0 || zero[zCount] == null) zero[zCount] = 1;

        zero[zCount] = zero[zCount] * Math.pow(10, v + 1);
        zCount++;
      }
    } // 10, 100, 1000
  } // for 1

  if (jpnEra[jpnEra.length - 1].match(/[一二三四五六七八九〇十]/)) {
    let num = 0;
    while (zero[num] != null) {
      total += zero[num];
      num++;
    }
  }

  for (var c = 0; c < number.length; c++) {
    total += number[c];
  }

  return total;
};
