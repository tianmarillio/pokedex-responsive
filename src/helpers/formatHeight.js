const DECIMETER_TO_CENTIMETER_MULTIPLIER = 10;
const DECIMETER_TO_FEET_MULTIPLIER = 1 / 3.048;

export default function formatHeight(decimeterValue) {
  const centimeterValue = decimeterValue * DECIMETER_TO_CENTIMETER_MULTIPLIER;
  const feetValue = decimeterValue * DECIMETER_TO_FEET_MULTIPLIER;

  const feetUnit = Math.floor(feetValue);
  let inchUnit = (feetValue - feetUnit) * 12;

  return (
    `${feetUnit}'` +
    (inchUnit ? `${inchUnit.toFixed(2)}"` : "") +
    ` (${centimeterValue} cm)`
  );
}
