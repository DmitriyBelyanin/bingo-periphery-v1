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

export declare namespace IBingoRoom {
  export type ParticipantStruct = {
    user: AddressLike;
    cardId: BigNumberish;
    isAbandoned: boolean;
  };

  export type ParticipantStructOutput = [
    user: string,
    cardId: bigint,
    isAbandoned: boolean
  ] & { user: string; cardId: bigint; isAbandoned: boolean };

  export type GameRoundStruct = {
    round: BigNumberish;
    number: BigNumberish;
    timestamp: BigNumberish;
    player: AddressLike;
  };

  export type GameRoundStructOutput = [
    round: bigint,
    number: bigint,
    timestamp: bigint,
    player: string
  ] & { round: bigint; number: bigint; timestamp: bigint; player: string };

  export type GameSettingsStruct = {
    betSize: BigNumberish;
    expectedLines: BigNumberish;
    minNumber: BigNumberish;
    maxNumber: BigNumberish;
  };

  export type GameSettingsStructOutput = [
    betSize: bigint,
    expectedLines: bigint,
    minNumber: bigint,
    maxNumber: bigint
  ] & {
    betSize: bigint;
    expectedLines: bigint;
    minNumber: bigint;
    maxNumber: bigint;
  };
}

export declare namespace IGameLineup {
  export type WaitingInfoStruct = {
    level: BigNumberish;
    users: AddressLike[];
    minWinCounts: BigNumberish;
    minWinRate: BigNumberish;
    maxWinCounts: BigNumberish;
    maxWinRate: BigNumberish;
    startedAt: BigNumberish;
    endedAt: BigNumberish;
    betSize: BigNumberish;
    expectedLines: BigNumberish;
    minNumber: BigNumberish;
    maxNumber: BigNumberish;
  };

  export type WaitingInfoStructOutput = [
    level: bigint,
    users: string[],
    minWinCounts: bigint,
    minWinRate: bigint,
    maxWinCounts: bigint,
    maxWinRate: bigint,
    startedAt: bigint,
    endedAt: bigint,
    betSize: bigint,
    expectedLines: bigint,
    minNumber: bigint,
    maxNumber: bigint
  ] & {
    level: bigint;
    users: string[];
    minWinCounts: bigint;
    minWinRate: bigint;
    maxWinCounts: bigint;
    maxWinRate: bigint;
    startedAt: bigint;
    endedAt: bigint;
    betSize: bigint;
    expectedLines: bigint;
    minNumber: bigint;
    maxNumber: bigint;
  };
}

export declare namespace BingoGameRoom {
  export type GameTimeoutStruct = {
    startTimeout: BigNumberish;
    boostRounds: BigNumberish;
    roundGap: BigNumberish;
    roundTimeout: BigNumberish;
    maxDuration: BigNumberish;
  };

  export type GameTimeoutStructOutput = [
    startTimeout: bigint,
    boostRounds: bigint,
    roundGap: bigint,
    roundTimeout: bigint,
    maxDuration: bigint
  ] & {
    startTimeout: bigint;
    boostRounds: bigint;
    roundGap: bigint;
    roundTimeout: bigint;
    maxDuration: bigint;
  };
}

export interface ZkBingoLobbyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "RECENT_GAME_COUNTS"
      | "abandon"
      | "addLevel"
      | "bingo"
      | "bingoFee"
      | "gameCard"
      | "gamePlayerCounts"
      | "getCurrentRound"
      | "getGameInfo"
      | "getNextKeyLabel"
      | "getSelectedNumbers"
      | "initialize"
      | "join"
      | "leave"
      | "lineupUsers"
      | "maxPlayers"
      | "minPlayers"
      | "owner"
      | "proxiableUUID"
      | "removeLevel"
      | "restoreGame"
      | "selectAndBingo"
      | "selectNumber"
      | "setBingFee"
      | "setGameTimers"
      | "setInitData"
      | "setVipToken"
      | "start"
      | "timer"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "version"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "BeaconUpgraded"
      | "Bingo"
      | "GameHalted"
      | "GameParticipated"
      | "GameStarted"
      | "LineupJoined"
      | "LineupLeft"
      | "NumberSelected"
      | "OwnershipTransferred"
      | "RewardChanged"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "RECENT_GAME_COUNTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "abandon",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addLevel",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bingo",
    values: [BigNumberish, BigNumberish[][], BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "bingoFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "gameCard", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gamePlayerCounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentRound",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextKeyLabel",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSelectedNumbers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "join",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "leave", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lineupUsers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxPlayers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minPlayers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeLevel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "restoreGame",
    values: [AddressLike, BigNumberish[][], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selectAndBingo",
    values: [BigNumberish, BigNumberish, BigNumberish[][], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selectNumber",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBingFee",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setGameTimers",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setInitData",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setVipToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(functionFragment: "timer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "RECENT_GAME_COUNTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "abandon", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addLevel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bingo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bingoFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gameCard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gamePlayerCounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextKeyLabel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSelectedNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leave", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lineupUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxPlayers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minPlayers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restoreGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectAndBingo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBingFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGameTimers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInitData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVipToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
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

export namespace BingoEvent {
  export type InputTuple = [gameId: BigNumberish, player: AddressLike];
  export type OutputTuple = [gameId: bigint, player: string];
  export interface OutputObject {
    gameId: bigint;
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameHaltedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    user: AddressLike,
    isOvertime: boolean,
    confiscate: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    user: string,
    isOvertime: boolean,
    confiscate: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    user: string;
    isOvertime: boolean;
    confiscate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameParticipatedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    player: AddressLike,
    cardId: BigNumberish,
    position: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    player: string,
    cardId: bigint,
    position: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    player: string;
    cardId: bigint;
    position: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameStartedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    cardContract: AddressLike,
    players: AddressLike[]
  ];
  export type OutputTuple = [
    gameId: bigint,
    cardContract: string,
    players: string[]
  ];
  export interface OutputObject {
    gameId: bigint;
    cardContract: string;
    players: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LineupJoinedEvent {
  export type InputTuple = [player: AddressLike];
  export type OutputTuple = [player: string];
  export interface OutputObject {
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LineupLeftEvent {
  export type InputTuple = [player: AddressLike];
  export type OutputTuple = [player: string];
  export interface OutputObject {
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NumberSelectedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    round: BigNumberish,
    player: AddressLike,
    number: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    round: bigint,
    player: string,
    number: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    round: bigint;
    player: string;
    number: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardChangedEvent {
  export type InputTuple = [newReward: AddressLike, oldReward: AddressLike];
  export type OutputTuple = [newReward: string, oldReward: string];
  export interface OutputObject {
    newReward: string;
    oldReward: string;
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

export interface ZkBingoLobby extends BaseContract {
  connect(runner?: ContractRunner | null): ZkBingoLobby;
  waitForDeployment(): Promise<this>;

  interface: ZkBingoLobbyInterface;

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

  RECENT_GAME_COUNTS: TypedContractMethod<[], [bigint], "view">;

  abandon: TypedContractMethod<[gameId: BigNumberish], [void], "nonpayable">;

  addLevel: TypedContractMethod<
    [
      betSize: BigNumberish,
      minWinCounts: BigNumberish,
      minWinRate: BigNumberish,
      maxWinCounts: BigNumberish,
      maxWinRate: BigNumberish,
      startedAt: BigNumberish,
      endedAt: BigNumberish,
      expectedLines: BigNumberish,
      minCardNumber: BigNumberish,
      maxCardNumber: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  bingo: TypedContractMethod<
    [
      gameId: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  bingoFee: TypedContractMethod<[], [string], "view">;

  gameCard: TypedContractMethod<[], [string], "view">;

  gamePlayerCounts: TypedContractMethod<
    [gameId: BigNumberish],
    [bigint],
    "view"
  >;

  getCurrentRound: TypedContractMethod<
    [gameId: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        round: bigint;
        player: string;
        remain: bigint;
        status: string;
      }
    ],
    "view"
  >;

  getGameInfo: TypedContractMethod<
    [gameId: BigNumberish],
    [
      [
        bigint,
        bigint,
        string,
        bigint,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[],
        IBingoRoom.GameSettingsStructOutput,
        string
      ] & {
        startedAt: bigint;
        endedAt: bigint;
        winner: string;
        winAmount: bigint;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
        settings: IBingoRoom.GameSettingsStructOutput;
        status: string;
      }
    ],
    "view"
  >;

  getNextKeyLabel: TypedContractMethod<[user: AddressLike], [string], "view">;

  getSelectedNumbers: TypedContractMethod<
    [gameId: BigNumberish],
    [bigint[]],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _gameCard: AddressLike,
      _expectedLines: BigNumberish,
      _minPlayers: BigNumberish,
      _maxPlayers: BigNumberish,
      minCardNumber: BigNumberish,
      maxCardNumber: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  join: TypedContractMethod<
    [level: BigNumberish, zkCard: BytesLike],
    [void],
    "nonpayable"
  >;

  leave: TypedContractMethod<[], [void], "nonpayable">;

  lineupUsers: TypedContractMethod<
    [],
    [
      [bigint, IGameLineup.WaitingInfoStructOutput[]] & {
        wRate: bigint;
        list: IGameLineup.WaitingInfoStructOutput[];
      }
    ],
    "view"
  >;

  maxPlayers: TypedContractMethod<[], [bigint], "view">;

  minPlayers: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  removeLevel: TypedContractMethod<[lv: BigNumberish], [void], "nonpayable">;

  restoreGame: TypedContractMethod<
    [
      player: AddressLike,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [
      [bigint, bigint, boolean] & {
        playingGameId: bigint;
        autoEndTime: bigint;
        isCardContentMatched: boolean;
      }
    ],
    "nonpayable"
  >;

  selectAndBingo: TypedContractMethod<
    [
      gameId: BigNumberish,
      number: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  selectNumber: TypedContractMethod<
    [gameId: BigNumberish, number: BigNumberish],
    [void],
    "nonpayable"
  >;

  setBingFee: TypedContractMethod<
    [bingoFee_: AddressLike],
    [void],
    "nonpayable"
  >;

  setGameTimers: TypedContractMethod<
    [
      startTimeout: BigNumberish,
      boostRounds: BigNumberish,
      roundGap: BigNumberish,
      roundTimeout: BigNumberish,
      maxDuration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setInitData: TypedContractMethod<
    [
      firstGameId: BigNumberish,
      totalPlayers: BigNumberish,
      rewardDistributed: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setVipToken: TypedContractMethod<[token: AddressLike], [void], "nonpayable">;

  start: TypedContractMethod<[], [void], "nonpayable">;

  timer: TypedContractMethod<
    [],
    [BingoGameRoom.GameTimeoutStructOutput],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
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

  version: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "RECENT_GAME_COUNTS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "abandon"
  ): TypedContractMethod<[gameId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addLevel"
  ): TypedContractMethod<
    [
      betSize: BigNumberish,
      minWinCounts: BigNumberish,
      minWinRate: BigNumberish,
      maxWinCounts: BigNumberish,
      maxWinRate: BigNumberish,
      startedAt: BigNumberish,
      endedAt: BigNumberish,
      expectedLines: BigNumberish,
      minCardNumber: BigNumberish,
      maxCardNumber: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bingo"
  ): TypedContractMethod<
    [
      gameId: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bingoFee"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gameCard"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gamePlayerCounts"
  ): TypedContractMethod<[gameId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCurrentRound"
  ): TypedContractMethod<
    [gameId: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        round: bigint;
        player: string;
        remain: bigint;
        status: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getGameInfo"
  ): TypedContractMethod<
    [gameId: BigNumberish],
    [
      [
        bigint,
        bigint,
        string,
        bigint,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[],
        IBingoRoom.GameSettingsStructOutput,
        string
      ] & {
        startedAt: bigint;
        endedAt: bigint;
        winner: string;
        winAmount: bigint;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
        settings: IBingoRoom.GameSettingsStructOutput;
        status: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNextKeyLabel"
  ): TypedContractMethod<[user: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getSelectedNumbers"
  ): TypedContractMethod<[gameId: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _gameCard: AddressLike,
      _expectedLines: BigNumberish,
      _minPlayers: BigNumberish,
      _maxPlayers: BigNumberish,
      minCardNumber: BigNumberish,
      maxCardNumber: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "join"
  ): TypedContractMethod<
    [level: BigNumberish, zkCard: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "leave"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lineupUsers"
  ): TypedContractMethod<
    [],
    [
      [bigint, IGameLineup.WaitingInfoStructOutput[]] & {
        wRate: bigint;
        list: IGameLineup.WaitingInfoStructOutput[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "maxPlayers"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minPlayers"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeLevel"
  ): TypedContractMethod<[lv: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "restoreGame"
  ): TypedContractMethod<
    [
      player: AddressLike,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [
      [bigint, bigint, boolean] & {
        playingGameId: bigint;
        autoEndTime: bigint;
        isCardContentMatched: boolean;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "selectAndBingo"
  ): TypedContractMethod<
    [
      gameId: BigNumberish,
      number: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "selectNumber"
  ): TypedContractMethod<
    [gameId: BigNumberish, number: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBingFee"
  ): TypedContractMethod<[bingoFee_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setGameTimers"
  ): TypedContractMethod<
    [
      startTimeout: BigNumberish,
      boostRounds: BigNumberish,
      roundGap: BigNumberish,
      roundTimeout: BigNumberish,
      maxDuration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setInitData"
  ): TypedContractMethod<
    [
      firstGameId: BigNumberish,
      totalPlayers: BigNumberish,
      rewardDistributed: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setVipToken"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "start"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "timer"
  ): TypedContractMethod<[], [BingoGameRoom.GameTimeoutStructOutput], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
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
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;

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
    key: "Bingo"
  ): TypedContractEvent<
    BingoEvent.InputTuple,
    BingoEvent.OutputTuple,
    BingoEvent.OutputObject
  >;
  getEvent(
    key: "GameHalted"
  ): TypedContractEvent<
    GameHaltedEvent.InputTuple,
    GameHaltedEvent.OutputTuple,
    GameHaltedEvent.OutputObject
  >;
  getEvent(
    key: "GameParticipated"
  ): TypedContractEvent<
    GameParticipatedEvent.InputTuple,
    GameParticipatedEvent.OutputTuple,
    GameParticipatedEvent.OutputObject
  >;
  getEvent(
    key: "GameStarted"
  ): TypedContractEvent<
    GameStartedEvent.InputTuple,
    GameStartedEvent.OutputTuple,
    GameStartedEvent.OutputObject
  >;
  getEvent(
    key: "LineupJoined"
  ): TypedContractEvent<
    LineupJoinedEvent.InputTuple,
    LineupJoinedEvent.OutputTuple,
    LineupJoinedEvent.OutputObject
  >;
  getEvent(
    key: "LineupLeft"
  ): TypedContractEvent<
    LineupLeftEvent.InputTuple,
    LineupLeftEvent.OutputTuple,
    LineupLeftEvent.OutputObject
  >;
  getEvent(
    key: "NumberSelected"
  ): TypedContractEvent<
    NumberSelectedEvent.InputTuple,
    NumberSelectedEvent.OutputTuple,
    NumberSelectedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RewardChanged"
  ): TypedContractEvent<
    RewardChangedEvent.InputTuple,
    RewardChangedEvent.OutputTuple,
    RewardChangedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
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

    "Bingo(uint256,address)": TypedContractEvent<
      BingoEvent.InputTuple,
      BingoEvent.OutputTuple,
      BingoEvent.OutputObject
    >;
    Bingo: TypedContractEvent<
      BingoEvent.InputTuple,
      BingoEvent.OutputTuple,
      BingoEvent.OutputObject
    >;

    "GameHalted(uint256,address,bool,uint256)": TypedContractEvent<
      GameHaltedEvent.InputTuple,
      GameHaltedEvent.OutputTuple,
      GameHaltedEvent.OutputObject
    >;
    GameHalted: TypedContractEvent<
      GameHaltedEvent.InputTuple,
      GameHaltedEvent.OutputTuple,
      GameHaltedEvent.OutputObject
    >;

    "GameParticipated(uint256,address,uint256,uint8)": TypedContractEvent<
      GameParticipatedEvent.InputTuple,
      GameParticipatedEvent.OutputTuple,
      GameParticipatedEvent.OutputObject
    >;
    GameParticipated: TypedContractEvent<
      GameParticipatedEvent.InputTuple,
      GameParticipatedEvent.OutputTuple,
      GameParticipatedEvent.OutputObject
    >;

    "GameStarted(uint256,address,address[])": TypedContractEvent<
      GameStartedEvent.InputTuple,
      GameStartedEvent.OutputTuple,
      GameStartedEvent.OutputObject
    >;
    GameStarted: TypedContractEvent<
      GameStartedEvent.InputTuple,
      GameStartedEvent.OutputTuple,
      GameStartedEvent.OutputObject
    >;

    "LineupJoined(address)": TypedContractEvent<
      LineupJoinedEvent.InputTuple,
      LineupJoinedEvent.OutputTuple,
      LineupJoinedEvent.OutputObject
    >;
    LineupJoined: TypedContractEvent<
      LineupJoinedEvent.InputTuple,
      LineupJoinedEvent.OutputTuple,
      LineupJoinedEvent.OutputObject
    >;

    "LineupLeft(address)": TypedContractEvent<
      LineupLeftEvent.InputTuple,
      LineupLeftEvent.OutputTuple,
      LineupLeftEvent.OutputObject
    >;
    LineupLeft: TypedContractEvent<
      LineupLeftEvent.InputTuple,
      LineupLeftEvent.OutputTuple,
      LineupLeftEvent.OutputObject
    >;

    "NumberSelected(uint256,uint32,address,uint8)": TypedContractEvent<
      NumberSelectedEvent.InputTuple,
      NumberSelectedEvent.OutputTuple,
      NumberSelectedEvent.OutputObject
    >;
    NumberSelected: TypedContractEvent<
      NumberSelectedEvent.InputTuple,
      NumberSelectedEvent.OutputTuple,
      NumberSelectedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RewardChanged(address,address)": TypedContractEvent<
      RewardChangedEvent.InputTuple,
      RewardChangedEvent.OutputTuple,
      RewardChangedEvent.OutputObject
    >;
    RewardChanged: TypedContractEvent<
      RewardChangedEvent.InputTuple,
      RewardChangedEvent.OutputTuple,
      RewardChangedEvent.OutputObject
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
  };
}
