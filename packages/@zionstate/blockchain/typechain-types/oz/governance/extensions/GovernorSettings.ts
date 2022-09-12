/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface GovernorSettingsInterface extends utils.Interface {
  functions: {
    "BALLOT_TYPEHASH()": FunctionFragment;
    "COUNTING_MODE()": FunctionFragment;
    "castVote(uint256,uint8)": FunctionFragment;
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)": FunctionFragment;
    "castVoteWithReason(uint256,uint8,string)": FunctionFragment;
    "execute(address[],uint256[],bytes[],bytes32)": FunctionFragment;
    "getVotes(address,uint256)": FunctionFragment;
    "hasVoted(uint256,address)": FunctionFragment;
    "hashProposal(address[],uint256[],bytes[],bytes32)": FunctionFragment;
    "name()": FunctionFragment;
    "proposalDeadline(uint256)": FunctionFragment;
    "proposalSnapshot(uint256)": FunctionFragment;
    "proposalThreshold()": FunctionFragment;
    "propose(address[],uint256[],bytes[],string)": FunctionFragment;
    "quorum(uint256)": FunctionFragment;
    "setProposalThreshold(uint256)": FunctionFragment;
    "setVotingDelay(uint256)": FunctionFragment;
    "setVotingPeriod(uint256)": FunctionFragment;
    "state(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "version()": FunctionFragment;
    "votingDelay()": FunctionFragment;
    "votingPeriod()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BALLOT_TYPEHASH"
      | "COUNTING_MODE"
      | "castVote"
      | "castVoteBySig"
      | "castVoteWithReason"
      | "execute"
      | "getVotes"
      | "hasVoted"
      | "hashProposal"
      | "name"
      | "proposalDeadline"
      | "proposalSnapshot"
      | "proposalThreshold"
      | "propose"
      | "quorum"
      | "setProposalThreshold"
      | "setVotingDelay"
      | "setVotingPeriod"
      | "state"
      | "supportsInterface"
      | "version"
      | "votingDelay"
      | "votingPeriod"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BALLOT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COUNTING_MODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteBySig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteWithReason",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasVoted",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hashProposal",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalDeadline",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalSnapshot",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "quorum",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProposalThreshold",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVotingDelay",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVotingPeriod",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "state",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "votingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriod",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BALLOT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COUNTING_MODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "castVoteBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "castVoteWithReason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProposalThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVotingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVotingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPeriod",
    data: BytesLike
  ): Result;

  events: {
    "ProposalCanceled(uint256)": EventFragment;
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
    "ProposalExecuted(uint256)": EventFragment;
    "ProposalThresholdSet(uint256,uint256)": EventFragment;
    "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
    "VotingDelaySet(uint256,uint256)": EventFragment;
    "VotingPeriodSet(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalThresholdSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
}

export interface ProposalCanceledEventObject {
  proposalId: BigNumber;
}
export type ProposalCanceledEvent = TypedEvent<
  [BigNumber],
  ProposalCanceledEventObject
>;

export type ProposalCanceledEventFilter =
  TypedEventFilter<ProposalCanceledEvent>;

export interface ProposalCreatedEventObject {
  proposalId: BigNumber;
  proposer: string;
  targets: string[];
  values: BigNumber[];
  signatures: string[];
  calldatas: string[];
  startBlock: BigNumber;
  endBlock: BigNumber;
  description: string;
}
export type ProposalCreatedEvent = TypedEvent<
  [
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    string
  ],
  ProposalCreatedEventObject
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export interface ProposalExecutedEventObject {
  proposalId: BigNumber;
}
export type ProposalExecutedEvent = TypedEvent<
  [BigNumber],
  ProposalExecutedEventObject
>;

export type ProposalExecutedEventFilter =
  TypedEventFilter<ProposalExecutedEvent>;

export interface ProposalThresholdSetEventObject {
  oldProposalThreshold: BigNumber;
  newProposalThreshold: BigNumber;
}
export type ProposalThresholdSetEvent = TypedEvent<
  [BigNumber, BigNumber],
  ProposalThresholdSetEventObject
>;

export type ProposalThresholdSetEventFilter =
  TypedEventFilter<ProposalThresholdSetEvent>;

export interface VoteCastEventObject {
  voter: string;
  proposalId: BigNumber;
  support: number;
  weight: BigNumber;
  reason: string;
}
export type VoteCastEvent = TypedEvent<
  [string, BigNumber, number, BigNumber, string],
  VoteCastEventObject
>;

export type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;

export interface VotingDelaySetEventObject {
  oldVotingDelay: BigNumber;
  newVotingDelay: BigNumber;
}
export type VotingDelaySetEvent = TypedEvent<
  [BigNumber, BigNumber],
  VotingDelaySetEventObject
>;

export type VotingDelaySetEventFilter = TypedEventFilter<VotingDelaySetEvent>;

export interface VotingPeriodSetEventObject {
  oldVotingPeriod: BigNumber;
  newVotingPeriod: BigNumber;
}
export type VotingPeriodSetEvent = TypedEvent<
  [BigNumber, BigNumber],
  VotingPeriodSetEventObject
>;

export type VotingPeriodSetEventFilter = TypedEventFilter<VotingPeriodSetEvent>;

export interface GovernorSettings extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernorSettingsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    COUNTING_MODE(overrides?: CallOverrides): Promise<[string]>;

    castVote(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    castVoteBySig(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    castVoteWithReason(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      reason: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    execute(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hasVoted(
      proposalId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hashProposal(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    proposalDeadline(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    proposalSnapshot(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    propose(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    quorum(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setProposalThreshold(
      newProposalThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVotingDelay(
      newVotingDelay: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVotingPeriod(
      newVotingPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    state(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    version(overrides?: CallOverrides): Promise<[string]>;

    votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  COUNTING_MODE(overrides?: CallOverrides): Promise<string>;

  castVote(
    proposalId: PromiseOrValue<BigNumberish>,
    support: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  castVoteBySig(
    proposalId: PromiseOrValue<BigNumberish>,
    support: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  castVoteWithReason(
    proposalId: PromiseOrValue<BigNumberish>,
    support: PromiseOrValue<BigNumberish>,
    reason: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  execute(
    targets: PromiseOrValue<string>[],
    values: PromiseOrValue<BigNumberish>[],
    calldatas: PromiseOrValue<BytesLike>[],
    descriptionHash: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getVotes(
    account: PromiseOrValue<string>,
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hasVoted(
    proposalId: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hashProposal(
    targets: PromiseOrValue<string>[],
    values: PromiseOrValue<BigNumberish>[],
    calldatas: PromiseOrValue<BytesLike>[],
    descriptionHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  proposalDeadline(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proposalSnapshot(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  propose(
    targets: PromiseOrValue<string>[],
    values: PromiseOrValue<BigNumberish>[],
    calldatas: PromiseOrValue<BytesLike>[],
    description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  quorum(
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setProposalThreshold(
    newProposalThreshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVotingDelay(
    newVotingDelay: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVotingPeriod(
    newVotingPeriod: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  state(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  version(overrides?: CallOverrides): Promise<string>;

  votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

  votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    COUNTING_MODE(overrides?: CallOverrides): Promise<string>;

    castVote(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    castVoteBySig(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    castVoteWithReason(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      reason: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    execute(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasVoted(
      proposalId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hashProposal(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    proposalDeadline(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalSnapshot(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    propose(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quorum(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setProposalThreshold(
      newProposalThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVotingDelay(
      newVotingDelay: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVotingPeriod(
      newVotingPeriod: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    state(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    version(overrides?: CallOverrides): Promise<string>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ProposalCanceled(uint256)"(proposalId?: null): ProposalCanceledEventFilter;
    ProposalCanceled(proposalId?: null): ProposalCanceledEventFilter;

    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(
      proposalId?: null,
      proposer?: null,
      targets?: null,
      values?: null,
      signatures?: null,
      calldatas?: null,
      startBlock?: null,
      endBlock?: null,
      description?: null
    ): ProposalCreatedEventFilter;
    ProposalCreated(
      proposalId?: null,
      proposer?: null,
      targets?: null,
      values?: null,
      signatures?: null,
      calldatas?: null,
      startBlock?: null,
      endBlock?: null,
      description?: null
    ): ProposalCreatedEventFilter;

    "ProposalExecuted(uint256)"(proposalId?: null): ProposalExecutedEventFilter;
    ProposalExecuted(proposalId?: null): ProposalExecutedEventFilter;

    "ProposalThresholdSet(uint256,uint256)"(
      oldProposalThreshold?: null,
      newProposalThreshold?: null
    ): ProposalThresholdSetEventFilter;
    ProposalThresholdSet(
      oldProposalThreshold?: null,
      newProposalThreshold?: null
    ): ProposalThresholdSetEventFilter;

    "VoteCast(address,uint256,uint8,uint256,string)"(
      voter?: PromiseOrValue<string> | null,
      proposalId?: null,
      support?: null,
      weight?: null,
      reason?: null
    ): VoteCastEventFilter;
    VoteCast(
      voter?: PromiseOrValue<string> | null,
      proposalId?: null,
      support?: null,
      weight?: null,
      reason?: null
    ): VoteCastEventFilter;

    "VotingDelaySet(uint256,uint256)"(
      oldVotingDelay?: null,
      newVotingDelay?: null
    ): VotingDelaySetEventFilter;
    VotingDelaySet(
      oldVotingDelay?: null,
      newVotingDelay?: null
    ): VotingDelaySetEventFilter;

    "VotingPeriodSet(uint256,uint256)"(
      oldVotingPeriod?: null,
      newVotingPeriod?: null
    ): VotingPeriodSetEventFilter;
    VotingPeriodSet(
      oldVotingPeriod?: null,
      newVotingPeriod?: null
    ): VotingPeriodSetEventFilter;
  };

  estimateGas: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    COUNTING_MODE(overrides?: CallOverrides): Promise<BigNumber>;

    castVote(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    castVoteBySig(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    castVoteWithReason(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      reason: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    execute(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasVoted(
      proposalId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashProposal(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    proposalDeadline(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalSnapshot(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    propose(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    quorum(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setProposalThreshold(
      newProposalThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVotingDelay(
      newVotingDelay: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVotingPeriod(
      newVotingPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    state(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COUNTING_MODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    castVote(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    castVoteBySig(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    castVoteWithReason(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      reason: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasVoted(
      proposalId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashProposal(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalDeadline(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalSnapshot(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    propose(
      targets: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    quorum(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setProposalThreshold(
      newProposalThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVotingDelay(
      newVotingDelay: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVotingPeriod(
      newVotingPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    state(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
