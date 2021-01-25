function isAdmissibleOverpayment(prices, notes, x) {
  let diff = 0;

  for (let i = 0; i < prices.length; i++) {
    let newPrice = prices[i];
    const note = notes[i];

    if (note !== "Same as in-store") {
      let [percent] = note.split("%");

      percent = parseInt(percent);

      if (note.includes("lower")) {
        percent = 100 - percent;
      } else {
        percent = 100 + percent;
      }

      newPrice = (100 * newPrice) / percent;
      diff = diff + prices[i] - newPrice;
    }
  }

  return diff <= x;
}

console.log(
  isAdmissibleOverpayment(
    [48, 165],
    ["20.00% lower than in-store", "10.00% higher than in-store"],
    2
  )
);

console.log(
  isAdmissibleOverpayment(
    [110, 95, 70],
    [
      "10.0% higher than in-store",
      "5.0% lower than in-store",
      "Same as in-store",
    ],
    5
  )
);
