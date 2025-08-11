/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, qs) {
  const mod = 10 ** 9 + 7;

  let nBinary = n.toString(2).split("").reverse();

  let sum = 0;
  let prod = 1;
  let powers = [];
  let prefixProd = [];

  for (let i = 0; i < nBinary.length; i++) {
    if (nBinary[i] === "0") {
      prod *= 2;
      continue;
    }
    powers.push(prod);
    if (!prefixProd.length) prefixProd.push(prod);
    else prefixProd.push(prefixProd.at(-1) * prod);
    prod *= 2;
    sum += prod;
    if (sum > n) break;
  }

  let ans = [];
  for (let [sum, e] of qs) {
    ans.push((prefixProd[e] / (prefixProd[sum - 1] || 1)) % mod);
  }
  return ans;
};