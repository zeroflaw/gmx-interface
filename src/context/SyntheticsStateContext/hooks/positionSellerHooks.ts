import {
  selectPositionSeller,
  selectPositionSellerKeepCollateral,
  selectPositionSellerCollateralDisabledByCollateral,
  selectPositionSellerKeepLeverage,
  selectPositionSellerLeverageDisabledByCollateral,
} from "../selectors/positionSellerSelectors";
import { useSelector } from "../utils";

export const usePositionSeller = () => useSelector(selectPositionSeller);

export const usePositionSellerKeepLeverage = () => useSelector(selectPositionSellerKeepLeverage);
export const usePositionSellerLeverageDisabledByCollateral = () =>
  useSelector(selectPositionSellerLeverageDisabledByCollateral);

export const usePositionSellerKeepCollateral = () => useSelector(selectPositionSellerKeepCollateral);
export const usePositionSellerCollateralDisabledByCollateral = () =>
  useSelector(selectPositionSellerCollateralDisabledByCollateral);