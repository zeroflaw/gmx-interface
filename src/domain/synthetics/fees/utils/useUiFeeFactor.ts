import { BN_ZERO } from "lib/numbers";
import { useMemo } from "react";

export default function useUiFeeFactorRequest(chainId: number) {
  return useMemo(
    () => ({
      uiFeeFactor: BN_ZERO,
      error: undefined,
    }),
    [undefined, BN_ZERO]
  );
}