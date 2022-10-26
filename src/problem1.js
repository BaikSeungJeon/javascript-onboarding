function problem1(pobi, crong) {
  // 기능 1: 설계하기
  // 시작 면과 마지막 면이 나오지 않도록 책을 펼칩니다.
    // 페이지 === 1 || 페이지 === 400 ? false : true
  // 둘이 연속된 수 외가 안 됩니다.
    // [1] - [0] > 1 ? false : true
  // 위 둘의 경우 중 하나라도 해당 되면(||) -1을 return 합니다.

  // 포비의 최대수를 구합니다.
  // 크롱의 최대수를 구합니다.
  // 최대수는 더한 값과 곱한 값 중 Math.max를 이용해 return 해 줍니다.

  if(!getCheckPageNum(pobi, crong) || !getCheckPageGap(pobi, crong)) return -1;
  

}

function getCheckPageNum(pobi, crong){
  pobi.forEach(page => page === 1 || page === 400) || crong.forEach(page => page === 1 || page === 400) ? false : true
}

function getCheckPageGap(pobi, crong){
  pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1 ? false : true;
}

module.exports = problem1;
