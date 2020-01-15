export default function range(
  start: number,
  end: number,
  step: number = 1
): number[] {
  let values = [];

  for (let i = start; i <= end; i += step) {
    values.push(i);
  }

  return values;
}
