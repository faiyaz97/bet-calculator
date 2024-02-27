interface BetCalculationResult {
  potentialWin: number;
  totalStake: number;
}

export function Single(
  selections: any[],
  stake: number,
  oddsType: string
): BetCalculationResult {
  let potentialWin: number = 0;

  console.log("DEntro");

  selections.forEach((selection) => {
    if (oddsType === "Decimal") {
      potentialWin += selection.oddsDecimal * stake;
    } else {
      potentialWin +=
        (selection.oddsNumerator / selection.oddsDenominator) * stake;
    }
  });

  const totalStake = stake * selections.length;

  return { potentialWin, totalStake };
}
