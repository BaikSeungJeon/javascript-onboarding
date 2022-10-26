function problem1(pobi, crong) {
  if(!getCheckPageNum(pobi, crong) || !getCheckPageGap(pobi, crong)) return -1;
  if(maxNum(pobi) > maxNum(crong)) return 1;
  if(maxNum(pobi) < maxNum(crong)) return 2;
  if(maxNum(pobi) === maxNum(crong)) return 0;
}
// 페이지가 첫 번째 페이지거나 마지막 페이지인지 체크
function getCheckPageNum(pobi, crong) {
  return pobi.includes(1) || pobi.includes(400) || crong.includes(1) || crong.includes(400) ? false : true
}
// 페이지가 연속된 페이지인지 아닌지 체크
function getCheckPageGap(pobi, crong) {
  return pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1 ? false : true;
}
// 가장 큰 수를 반환해주는 함수
function maxNum(nums) {
  const leftNums = nums[0].toString().split(''); // 왼쪽 페이지
  const rightNums = nums[1].toString().split(''); // 오른쪽 페이지
  const sumNums = Math.max(leftNums.reduce((acc, cur) => Number(acc) + Number(cur), 0),
                            rightNums.reduce((acc, cur) => Number(acc) + Number(cur), 0));
  const multNums = Math.max(leftNums.reduce((acc, cur) => Number(acc) * Number(cur), 1),
                            rightNums.reduce((acc, cur) => Number(acc) * Number(cur), 1));
  const maxNums = Math.max(sumNums, multNums);
  return maxNums;
}
module.exports = problem1;
