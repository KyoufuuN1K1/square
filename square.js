function squares(nums) {
  // eslint-disable-next-line use-isnan
  const perfects = _.filter(nums, function (x) { return Number.isInteger((Math.sqrt(x))); });
  const squareNums = _.map(nums, function (x) { return x * x; });
  return [perfects, squareNums];
}
console.log(squares([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
