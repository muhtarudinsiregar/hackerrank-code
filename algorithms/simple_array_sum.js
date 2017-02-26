function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  var sum = arr.reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  });
  console.log(sum);

}
