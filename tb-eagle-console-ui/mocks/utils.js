exports.range = range;
function range(start, stop) {
  const values = [];

  for (let i = start; i <= stop; i++) {
    values.push(i);
  }

  return values;
};

exports.randomChoice = randomChoice;
function randomChoice(values) {
  const index = Math.floor(Math.random() * values.length);

  return values[index];
};

exports.multipleRandomChoice = multipleRandomChoice;
function multipleRandomChoice(values, length, upTo = true) {
  const given = Math.round(Math.random() * length);

  return range(1, given).map(() => randomChoice(values))
}
