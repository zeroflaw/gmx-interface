/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ReaderV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "BASIS_POINTS_DIVISOR"
      | "POSITION_PROPS_LENGTH"
      | "PRICE_PRECISION"
      | "USDG_DECIMALS"
      | "getAmountOut"
      | "getFeeBasisPoints"
      | "getFees"
      | "getFullVaultTokenInfo"
      | "getFundingRates"
      | "getMaxAmountIn"
      | "getPairInfo"
      | "getPositions"
      | "getPrices"
      | "getStakingInfo"
      | "getTokenBalances"
      | "getTokenBalancesWithSupplies"
      | "getTokenSupply"
      | "getTotalBalance"
      | "getTotalStaked"
      | "getVaultTokenInfo"
      | "getVaultTokenInfoV2"
      | "getVestingInfo"
      | "gov"
      | "hasMaxGlobalShortSizes"
      | "setConfig"
      | "setGov"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "BASIS_POINTS_DIVISOR", values?: undefined): string;
  encodeFunctionData(functionFragment: "POSITION_PROPS_LENGTH", values?: undefined): string;
  encodeFunctionData(functionFragment: "PRICE_PRECISION", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDG_DECIMALS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeBasisPoints",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getFees", values: [AddressLike, AddressLike[]]): string;
  encodeFunctionData(
    functionFragment: "getFullVaultTokenInfo",
    values: [AddressLike, AddressLike, BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(functionFragment: "getFundingRates", values: [AddressLike, AddressLike, AddressLike[]]): string;
  encodeFunctionData(functionFragment: "getMaxAmountIn", values: [AddressLike, AddressLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "getPairInfo", values: [AddressLike, AddressLike[]]): string;
  encodeFunctionData(
    functionFragment: "getPositions",
    values: [AddressLike, AddressLike, AddressLike[], AddressLike[], boolean[]]
  ): string;
  encodeFunctionData(functionFragment: "getPrices", values: [AddressLike, AddressLike[]]): string;
  encodeFunctionData(functionFragment: "getStakingInfo", values: [AddressLike, AddressLike[]]): string;
  encodeFunctionData(functionFragment: "getTokenBalances", values: [AddressLike, AddressLike[]]): string;
  encodeFunctionData(functionFragment: "getTokenBalancesWithSupplies", values: [AddressLike, AddressLike[]]): string;
  encodeFunctionData(functionFragment: "getTokenSupply", values: [AddressLike, AddressLike[]]): string;
  encodeFunctionData(functionFragment: "getTotalBalance", values: [AddressLike, AddressLike[]]): string;
  encodeFunctionData(functionFragment: "getTotalStaked", values: [AddressLike[]]): string;
  encodeFunctionData(
    functionFragment: "getVaultTokenInfo",
    values: [AddressLike, AddressLike, BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultTokenInfoV2",
    values: [AddressLike, AddressLike, BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(functionFragment: "getVestingInfo", values: [AddressLike, AddressLike[]]): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(functionFragment: "hasMaxGlobalShortSizes", values?: undefined): string;
  encodeFunctionData(functionFragment: "setConfig", values: [boolean]): string;
  encodeFunctionData(functionFragment: "setGov", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "BASIS_POINTS_DIVISOR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "POSITION_PROPS_LENGTH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PRICE_PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDG_DECIMALS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFeeBasisPoints", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFullVaultTokenInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFundingRates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMaxAmountIn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPairInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPositions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPrices", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getStakingInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenBalances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenBalancesWithSupplies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTotalBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTotalStaked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVaultTokenInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVaultTokenInfoV2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVestingInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasMaxGlobalShortSizes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
}

export interface ReaderV2 extends BaseContract {
  connect(runner?: ContractRunner | null): ReaderV2;
  waitForDeployment(): Promise<this>;

  interface: ReaderV2Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;

  BASIS_POINTS_DIVISOR: TypedContractMethod<[], [bigint], "view">;

  POSITION_PROPS_LENGTH: TypedContractMethod<[], [bigint], "view">;

  PRICE_PRECISION: TypedContractMethod<[], [bigint], "view">;

  USDG_DECIMALS: TypedContractMethod<[], [bigint], "view">;

  getAmountOut: TypedContractMethod<
    [_vault: AddressLike, _tokenIn: AddressLike, _tokenOut: AddressLike, _amountIn: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;

  getFeeBasisPoints: TypedContractMethod<
    [_vault: AddressLike, _tokenIn: AddressLike, _tokenOut: AddressLike, _amountIn: BigNumberish],
    [[bigint, bigint, bigint]],
    "view"
  >;

  getFees: TypedContractMethod<[_vault: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;

  getFullVaultTokenInfo: TypedContractMethod<
    [_vault: AddressLike, _weth: AddressLike, _usdgAmount: BigNumberish, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getFundingRates: TypedContractMethod<
    [_vault: AddressLike, _weth: AddressLike, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getMaxAmountIn: TypedContractMethod<
    [_vault: AddressLike, _tokenIn: AddressLike, _tokenOut: AddressLike],
    [bigint],
    "view"
  >;

  getPairInfo: TypedContractMethod<[_factory: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;

  getPositions: TypedContractMethod<
    [
      _vault: AddressLike,
      _account: AddressLike,
      _collateralTokens: AddressLike[],
      _indexTokens: AddressLike[],
      _isLong: boolean[],
    ],
    [bigint[]],
    "view"
  >;

  getPrices: TypedContractMethod<[_priceFeed: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;

  getStakingInfo: TypedContractMethod<[_account: AddressLike, _yieldTrackers: AddressLike[]], [bigint[]], "view">;

  getTokenBalances: TypedContractMethod<[_account: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;

  getTokenBalancesWithSupplies: TypedContractMethod<
    [_account: AddressLike, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getTokenSupply: TypedContractMethod<[_token: AddressLike, _excludedAccounts: AddressLike[]], [bigint], "view">;

  getTotalBalance: TypedContractMethod<[_token: AddressLike, _accounts: AddressLike[]], [bigint], "view">;

  getTotalStaked: TypedContractMethod<[_yieldTokens: AddressLike[]], [bigint[]], "view">;

  getVaultTokenInfo: TypedContractMethod<
    [_vault: AddressLike, _weth: AddressLike, _usdgAmount: BigNumberish, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getVaultTokenInfoV2: TypedContractMethod<
    [_vault: AddressLike, _weth: AddressLike, _usdgAmount: BigNumberish, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getVestingInfo: TypedContractMethod<[_account: AddressLike, _vesters: AddressLike[]], [bigint[]], "view">;

  gov: TypedContractMethod<[], [string], "view">;

  hasMaxGlobalShortSizes: TypedContractMethod<[], [boolean], "view">;

  setConfig: TypedContractMethod<[_hasMaxGlobalShortSizes: boolean], [void], "nonpayable">;

  setGov: TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "BASIS_POINTS_DIVISOR"): TypedContractMethod<[], [bigint], "view">;
  getFunction(nameOrSignature: "POSITION_PROPS_LENGTH"): TypedContractMethod<[], [bigint], "view">;
  getFunction(nameOrSignature: "PRICE_PRECISION"): TypedContractMethod<[], [bigint], "view">;
  getFunction(nameOrSignature: "USDG_DECIMALS"): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAmountOut"
  ): TypedContractMethod<
    [_vault: AddressLike, _tokenIn: AddressLike, _tokenOut: AddressLike, _amountIn: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getFeeBasisPoints"
  ): TypedContractMethod<
    [_vault: AddressLike, _tokenIn: AddressLike, _tokenOut: AddressLike, _amountIn: BigNumberish],
    [[bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getFees"
  ): TypedContractMethod<[_vault: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getFullVaultTokenInfo"
  ): TypedContractMethod<
    [_vault: AddressLike, _weth: AddressLike, _usdgAmount: BigNumberish, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getFundingRates"
  ): TypedContractMethod<[_vault: AddressLike, _weth: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getMaxAmountIn"
  ): TypedContractMethod<[_vault: AddressLike, _tokenIn: AddressLike, _tokenOut: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPairInfo"
  ): TypedContractMethod<[_factory: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getPositions"
  ): TypedContractMethod<
    [
      _vault: AddressLike,
      _account: AddressLike,
      _collateralTokens: AddressLike[],
      _indexTokens: AddressLike[],
      _isLong: boolean[],
    ],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPrices"
  ): TypedContractMethod<[_priceFeed: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getStakingInfo"
  ): TypedContractMethod<[_account: AddressLike, _yieldTrackers: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getTokenBalances"
  ): TypedContractMethod<[_account: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getTokenBalancesWithSupplies"
  ): TypedContractMethod<[_account: AddressLike, _tokens: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getTokenSupply"
  ): TypedContractMethod<[_token: AddressLike, _excludedAccounts: AddressLike[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalBalance"
  ): TypedContractMethod<[_token: AddressLike, _accounts: AddressLike[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalStaked"
  ): TypedContractMethod<[_yieldTokens: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getVaultTokenInfo"
  ): TypedContractMethod<
    [_vault: AddressLike, _weth: AddressLike, _usdgAmount: BigNumberish, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVaultTokenInfoV2"
  ): TypedContractMethod<
    [_vault: AddressLike, _weth: AddressLike, _usdgAmount: BigNumberish, _tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVestingInfo"
  ): TypedContractMethod<[_account: AddressLike, _vesters: AddressLike[]], [bigint[]], "view">;
  getFunction(nameOrSignature: "gov"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "hasMaxGlobalShortSizes"): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "setConfig"
  ): TypedContractMethod<[_hasMaxGlobalShortSizes: boolean], [void], "nonpayable">;
  getFunction(nameOrSignature: "setGov"): TypedContractMethod<[_gov: AddressLike], [void], "nonpayable">;

  filters: {};
}