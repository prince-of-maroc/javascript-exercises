const ftoc = (celsius) => parseFloat(((celsius - 32) * 0.555555556).toFixed(1));
const ctof = (f) => parseFloat((f * 1.8 + 32).toFixed(1));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
