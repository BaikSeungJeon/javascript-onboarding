function problem1(pobi, crong) {
  if(!getCheckPageNum(pobi, crong) || !getCheckPageGap(pobi, crong)) return -1;
}
// 페이지가 첫 번째 페이지거나 마지막 페이지인지 체크
function getCheckPageNum(pobi, crong) {
  return pobi.includes(1) || pobi.includes(400) || crong.includes(1) || crong.includes(400) ? false : true
}
// 페이지가 연속된 페이지인지 아닌지 체크
function getCheckPageGap(pobi, crong) {
  return pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1 ? false : true;
}

module.exports = problem1;
