function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit2 = 0;
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit2 = Math.max(maxProfit2, price - minPrice);
    }
  }
  return maxProfit2;
}
export {
  maxProfit
};
