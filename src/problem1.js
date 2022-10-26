function problem1(pobi, crong) {
  if(!getCheckPageNum(pobi, crong) || !getCheckPageGap(pobi, crong)) return -1;
  if(calcMaxNum(pobi) > calcMaxNum(crong)) return 1;
  if(calcMaxNum(pobi) < calcMaxNum(crong)) return 2;
  if(calcMaxNum(pobi) === calcMaxNum(crong)) return 0;
}
function getCheckPageNum(pobi, crong) {
  return pobi.includes(1) || pobi.includes(400) || crong.includes(1) || crong.includes(400) ? false : true;
}
function getCheckPageGap(pobi, crong) {
  return pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1 ? false : true;
}
function calcMaxNum(pages) {
  const leftPage = pages[0].toString().split('');
  const rightPage = pages[1].toString().split('');
  const sumNum = Math.max(leftPage.reduce((acc, cur) => Number(acc) + Number(cur), 0),
    rightPage.reduce((acc, cur) => Number(acc) + Number(cur), 0));
  const multNum = Math.max(leftPage.reduce((acc, cur) => Number(acc) * Number(cur), 1),
    rightPage.reduce((acc, cur) => Number(acc) * Number(cur), 1));
  const maxNum = Math.max(sumNum, multNum);
  return maxNum;
}

module.exports = problem1;