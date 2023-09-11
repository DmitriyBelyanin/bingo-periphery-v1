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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace ZkBingoPoints {
  export type ClaimConfStruct = {
    ordinary: BigNumberish;
    princely: BigNumberish;
  };

  export type ClaimConfStructOutput = [ordinary: bigint, princely: bigint] & {
    ordinary: bigint;
    princely: bigint;
  };

  export type SwapInfoStruct = { amount: BigNumberish; discount: BigNumberish };

  export type SwapInfoStructOutput = [amount: bigint, discount: bigint] & {
    amount: bigint;
    discount: bigint;
  };
}

export interface ZkBingoPointsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CONSECUTIVE_TIMES"
      | "DEFAULT_ADMIN_ROLE"
      | "FREE_DURATION"
      | "blindBoxAddress"
      | "claim"
      | "claimEnable"
      | "claimStartTime"
      | "dayClaimed"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "nativeSwap"
      | "nativeWithdrawTo"
      | "pointsToken"
      | "proxiableUUID"
      | "renounceRole"
      | "revokeRole"
      | "setBlindBoxAddress"
      | "setClaimConf"
      | "setClaimEnable"
      | "setClaimStartTime"
      | "setPointsToken"
      | "setSwapInfo"
      | "setSwapRatio"
      | "signInInfos"
      | "supportsInterface"
      | "swapInfos"
      | "swapRatios"
      | "swaps"
      | "totalSwaps"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "BeaconUpgraded"
      | "Claim"
      | "Initialized"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Swap"
      | "Upgraded"
      | "WithdrawTo"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "CONSECUTIVE_TIMES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FREE_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blindBoxAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimEnable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimStartTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dayClaimed",
    values: [string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeSwap",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeWithdrawTo",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pointsToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setBlindBoxAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimConf",
    values: [BigNumberish, ZkBingoPoints.ClaimConfStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimEnable",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimStartTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPointsToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapInfo",
    values: [BigNumberish, ZkBingoPoints.SwapInfoStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapRatio",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signInInfos",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapInfos",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapRatios",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swaps",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSwaps",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "CONSECUTIVE_TIMES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FREE_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blindBoxAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimEnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dayClaimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nativeSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nativeWithdrawTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pointsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBlindBoxAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimConf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimEnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPointsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signInInfos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapInfos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapRatios", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swaps", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalSwaps", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
}

export namespace AdminChangedEvent {
  export type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [previousAdmin: string, newAdmin: string];
  export interface OutputObject {
    previousAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeaconUpgradedEvent {
  export type InputTuple = [beacon: AddressLike];
  export type OutputTuple = [beacon: string];
  export interface OutputObject {
    beacon: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimEvent {
  export type InputTuple = [
    operator: AddressLike,
    claimType: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    operator: string,
    claimType: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    operator: string;
    claimType: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwapEvent {
  export type InputTuple = [
    operator: AddressLike,
    token: AddressLike,
    nativeAmount: BigNumberish,
    pointsAmount: BigNumberish
  ];
  export type OutputTuple = [
    operator: string,
    token: string,
    nativeAmount: bigint,
    pointsAmount: bigint
  ];
  export interface OutputObject {
    operator: string;
    token: string;
    nativeAmount: bigint;
    pointsAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawToEvent {
  export type InputTuple = [
    operator: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [operator: string, to: string, amount: bigint];
  export interface OutputObject {
    operator: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ZkBingoPoints extends BaseContract {
  connect(runner?: ContractRunner | null): ZkBingoPoints;
  waitForDeployment(): Promise<this>;

  interface: ZkBingoPointsInterface;

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

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  CONSECUTIVE_TIMES: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  FREE_DURATION: TypedContractMethod<[], [bigint], "view">;

  blindBoxAddress: TypedContractMethod<[], [string], "view">;

  claim: TypedContractMethod<[], [void], "nonpayable">;

  claimEnable: TypedContractMethod<[], [boolean], "view">;

  claimStartTime: TypedContractMethod<[], [bigint], "view">;

  dayClaimed: TypedContractMethod<
    [arg0: string, arg1: AddressLike],
    [boolean],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<
    [pointsToken_: AddressLike, blindBoxAddress_: AddressLike],
    [void],
    "nonpayable"
  >;

  nativeSwap: TypedContractMethod<
    [lobby_: AddressLike, infoIndex_: BigNumberish],
    [void],
    "payable"
  >;

  nativeWithdrawTo: TypedContractMethod<
    [to_: AddressLike, amount_: BigNumberish],
    [void],
    "nonpayable"
  >;

  pointsToken: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setBlindBoxAddress: TypedContractMethod<
    [blindBoxAddress_: AddressLike],
    [void],
    "nonpayable"
  >;

  setClaimConf: TypedContractMethod<
    [claimType: BigNumberish, claimConf_: ZkBingoPoints.ClaimConfStruct[]],
    [void],
    "nonpayable"
  >;

  setClaimEnable: TypedContractMethod<
    [claimEnable_: boolean],
    [void],
    "nonpayable"
  >;

  setClaimStartTime: TypedContractMethod<
    [claimStartTime_: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPointsToken: TypedContractMethod<
    [pointsToken_: AddressLike],
    [void],
    "nonpayable"
  >;

  setSwapInfo: TypedContractMethod<
    [lastLength: BigNumberish, swapInfos_: ZkBingoPoints.SwapInfoStruct[]],
    [void],
    "nonpayable"
  >;

  setSwapRatio: TypedContractMethod<
    [token_: AddressLike, decimals_: BigNumberish, ratio_: BigNumberish],
    [void],
    "nonpayable"
  >;

  signInInfos: TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, string] & { signCount: bigint; lastSignIn: string }],
    "view"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  swapInfos: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { amount: bigint; discount: bigint }],
    "view"
  >;

  swapRatios: TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, bigint] & { decimals: bigint; ratio: bigint }],
    "view"
  >;

  swaps: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: AddressLike],
    [bigint],
    "view"
  >;

  totalSwaps: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  upgradeTo: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CONSECUTIVE_TIMES"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FREE_DURATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "blindBoxAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimEnable"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "claimStartTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "dayClaimed"
  ): TypedContractMethod<[arg0: string, arg1: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [pointsToken_: AddressLike, blindBoxAddress_: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "nativeSwap"
  ): TypedContractMethod<
    [lobby_: AddressLike, infoIndex_: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "nativeWithdrawTo"
  ): TypedContractMethod<
    [to_: AddressLike, amount_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pointsToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBlindBoxAddress"
  ): TypedContractMethod<[blindBoxAddress_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setClaimConf"
  ): TypedContractMethod<
    [claimType: BigNumberish, claimConf_: ZkBingoPoints.ClaimConfStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setClaimEnable"
  ): TypedContractMethod<[claimEnable_: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setClaimStartTime"
  ): TypedContractMethod<[claimStartTime_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPointsToken"
  ): TypedContractMethod<[pointsToken_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSwapInfo"
  ): TypedContractMethod<
    [lastLength: BigNumberish, swapInfos_: ZkBingoPoints.SwapInfoStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSwapRatio"
  ): TypedContractMethod<
    [token_: AddressLike, decimals_: BigNumberish, ratio_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signInInfos"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, string] & { signCount: bigint; lastSignIn: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "swapInfos"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { amount: bigint; discount: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "swapRatios"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, bigint] & { decimals: bigint; ratio: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "swaps"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "totalSwaps"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "Claim"
  ): TypedContractEvent<
    ClaimEvent.InputTuple,
    ClaimEvent.OutputTuple,
    ClaimEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "Swap"
  ): TypedContractEvent<
    SwapEvent.InputTuple,
    SwapEvent.OutputTuple,
    SwapEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawTo"
  ): TypedContractEvent<
    WithdrawToEvent.InputTuple,
    WithdrawToEvent.OutputTuple,
    WithdrawToEvent.OutputObject
  >;

  filters: {
    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;

    "Claim(address,uint8,uint256)": TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;
    Claim: TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "Swap(address,address,uint256,uint256)": TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
    Swap: TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;

    "WithdrawTo(address,address,uint256)": TypedContractEvent<
      WithdrawToEvent.InputTuple,
      WithdrawToEvent.OutputTuple,
      WithdrawToEvent.OutputObject
    >;
    WithdrawTo: TypedContractEvent<
      WithdrawToEvent.InputTuple,
      WithdrawToEvent.OutputTuple,
      WithdrawToEvent.OutputObject
    >;
  };
}
