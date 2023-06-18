const HECTOGRAM_TO_KILOGRAM_MULTIPLIER = 1 / 10;
const HECTOGRAM_TO_POUND_MULTIPLIER = 1 / 4.536;

export default function formatWeight(hectogramValue) {
  const kilogramValue = hectogramValue * HECTOGRAM_TO_KILOGRAM_MULTIPLIER
  const poundValue = hectogramValue * HECTOGRAM_TO_POUND_MULTIPLIER

  return `${poundValue.toFixed(2)} lbs (${kilogramValue.toFixed(2)} kg)`
}
