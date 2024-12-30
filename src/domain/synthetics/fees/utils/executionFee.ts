import { DecreasePositionSwapType } from "domain/synthetics/orders";
import { GasLimitsConfig } from "sdk/types/fees";

/**
 * Only GM deposits. Do not confuse with increase with zero delta size.
 *
 * Copy from contract: `estimateExecuteDepositGasLimit`
 */
export function estimateExecuteDepositGasLimit(
  gasLimits: GasLimitsConfig,
  deposit: {
    // We do not use this yet
    longTokenSwapsCount?: number;
    // We do not use this yet
    shortTokenSwapsCount?: number;
    callbackGasLimit?: bigint;
  }
) {
  const gasPerSwap = gasLimits.singleSwap;
  const swapsCount = BigInt((deposit.longTokenSwapsCount ?? 0) + (deposit.shortTokenSwapsCount ?? 0));
  const gasForSwaps = swapsCount * gasPerSwap;

  return gasLimits.depositToken + (deposit.callbackGasLimit ?? 0n) + gasForSwaps;
}

export function estimateExecuteGlvDepositGasLimit(
  gasLimits: GasLimitsConfig,
  {
    marketsCount,
    isMarketTokenDeposit,
  }: {
    isMarketTokenDeposit;
    marketsCount: bigint;
    initialLongTokenAmount: bigint;
    initialShortTokenAmount: bigint;
  }
) {
  const gasPerGlvPerMarket = gasLimits.glvPerMarketGasLimit;
  const gasForGlvMarkets = gasPerGlvPerMarket * marketsCount;
  const glvDepositGasLimit = gasLimits.glvDepositGasLimit;
  const gasLimit = glvDepositGasLimit + gasForGlvMarkets;

  if (isMarketTokenDeposit) {
    return gasLimit;
  }

  return gasLimit + gasLimits.depositToken;
}

export function estimateExecuteGlvWithdrawalGasLimit(
  gasLimits: GasLimitsConfig,
  {
    marketsCount,
  }: {
    marketsCount: bigint;
  }
) {
  const gasPerGlvPerMarket = gasLimits.glvPerMarketGasLimit;
  const gasForGlvMarkets = gasPerGlvPerMarket * marketsCount;
  const glvWithdrawalGasLimit = gasLimits.glvWithdrawalGasLimit;
  const gasLimit = glvWithdrawalGasLimit + gasForGlvMarkets;

  return gasLimit + gasLimits.withdrawalMultiToken;
}

/**
 * Only GM withdrawals. Do not confuse with decrease with zero delta size.
 *
 * Copy from contract: `estimateExecuteWithdrawalGasLimit`
 */
export function estimateExecuteWithdrawalGasLimit(
  gasLimits: GasLimitsConfig,
  withdrawal: { callbackGasLimit?: bigint }
) {
  // Swap is not used but supported in the contract.
  // const gasPerSwap = gasLimits.singleSwap;
  // const swapsCount = 0n;
  // const gasForSwaps = swapsCount * gasPerSwap;

  return gasLimits.withdrawalMultiToken + (withdrawal.callbackGasLimit ?? 0n);
}

/**
 * Copy from contract: `estimateExecuteShiftGasLimit`
 */
export function estimateExecuteShiftGasLimit(gasLimits: GasLimitsConfig, shift: { callbackGasLimit?: bigint }) {
  return gasLimits.shift + (shift.callbackGasLimit ?? 0n);
}

/**
 * Copy from contract: `estimateExecuteIncreaseOrderGasLimit`
 */
export function estimateExecuteIncreaseOrderGasLimit(
  gasLimits: GasLimitsConfig,
  order: { swapsCount?: number; callbackGasLimit?: bigint }
) {
  const gasPerSwap = gasLimits.singleSwap;
  const swapsCount = BigInt(order.swapsCount ?? 0);

  return gasLimits.increaseOrder + gasPerSwap * swapsCount + (order.callbackGasLimit ?? 0n);
}

/**
 * Copy from contract: `estimateExecuteDecreaseOrderGasLimit`
 */
export function estimateExecuteDecreaseOrderGasLimit(
  gasLimits: GasLimitsConfig,
  order: { swapsCount: number; callbackGasLimit?: bigint; decreaseSwapType?: DecreasePositionSwapType }
) {
  const gasPerSwap = gasLimits.singleSwap;
  let swapsCount = BigInt(order.swapsCount);

  if (order.decreaseSwapType !== DecreasePositionSwapType.NoSwap) {
    swapsCount += 1n;
  }

  return gasLimits.decreaseOrder + gasPerSwap * swapsCount + (order.callbackGasLimit ?? 0n);
}

export function estimateExecuteSwapOrderGasLimit(
  gasLimits: GasLimitsConfig,
  order: { swapsCount: number; callbackGasLimit?: bigint }
) {
  const gasPerSwap = gasLimits.singleSwap;
  const swapsCount = BigInt(order.swapsCount);

  return gasLimits.swapOrder + gasPerSwap * swapsCount + (order.callbackGasLimit ?? 0n);
}
