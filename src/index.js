module.exports = function reverse (n) {
  n = n + "";
  let num = parseInt(n.split("").reverse().join(""));
  if (num < 0) {
    return Math.abs(num);
  } else {
    return num;
    }
}