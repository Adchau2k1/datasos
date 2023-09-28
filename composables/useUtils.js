export function formatNumberView(number) {
  let newNumber = number;

  if (!newNumber) return 0;
  if (typeof newNumber === "string") newNumber = parseInt(newNumber);
  return newNumber.toLocaleString("en-US").replaceAll(",", ".");
}
