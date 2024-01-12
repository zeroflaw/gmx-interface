import { t } from "@lingui/macro";
import { getTotalAccruedFundingUsd } from "domain/synthetics/markets";
import { PositionsInfoData } from "domain/synthetics/positions";
import { CSSProperties, useMemo } from "react";
import { ClaimableCardUI } from "./ClaimableCardUI";
import { PositionPriceImpactRebateInfo } from "domain/synthetics/claimHistory";
import { calcTotalRebateUsd } from "./utils";
import { useTokensData } from "domain/synthetics/tokens";
import { useChainId } from "lib/chains";
import ExternalLink from "components/ExternalLink/ExternalLink";

type Props = {
  onSettleClick: () => void;
  onAccruedPositionPriceImpactRebateClick: () => void;
  positionsInfoData: PositionsInfoData | undefined;
  style?: CSSProperties;
  accruedPositionPriceImpactFees: PositionPriceImpactRebateInfo[];
};

const tooltipText = t`Accrued Positive Funding Fees for Positions not yet claimable. They will become available to claim by using the "Settle" button, or after the Position is increased, decreased or closed.`;
const buttonText = t`Settle`;
const button2Text = t`Show details`;
const title = t`Accrued`;

export function SettleAccruedCard({
  accruedPositionPriceImpactFees,
  onAccruedPositionPriceImpactRebateClick,
  onSettleClick,
  positionsInfoData,
  style,
}: Props) {
  const positions = useMemo(() => Object.values(positionsInfoData || {}), [positionsInfoData]);
  const fundingFees = useMemo(() => getTotalAccruedFundingUsd(positions), [positions]);
  const { chainId } = useChainId();
  const { tokensData } = useTokensData(chainId);
  const priceImpactDifference = useMemo(
    () => calcTotalRebateUsd(accruedPositionPriceImpactFees, tokensData, true),
    [accruedPositionPriceImpactFees, tokensData]
  );

  return (
    <ClaimableCardUI
      fundingFees={fundingFees}
      priceImpactDifference={priceImpactDifference}
      buttonText={buttonText}
      button2Text={button2Text}
      title={title}
      tooltipText={tooltipText}
      tooltip2Text={
        <>
          Pending Price Impact Rebates.
          <br />
          <br />
          <ExternalLink href="https://docs.gmx.io/docs/trading/v2/#price-impact">Read more</ExternalLink>.
        </>
      }
      onButtonClick={onSettleClick}
      onButton2Click={onAccruedPositionPriceImpactRebateClick}
      button2Style="secondary"
      style={style}
    />
  );
}
