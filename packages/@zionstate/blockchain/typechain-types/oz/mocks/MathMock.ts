/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface MathMockInterface extends utils.Interface {
  functions: {
    "average(uint256,uint256)": FunctionFragment;
    "ceilDiv(uint256,uint256)": FunctionFragment;
    "max(uint256,uint256)": FunctionFragment;
    "min(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "average" | "ceilDiv" | "max" | "min"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "average",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ceilDiv",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "max",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "min",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "average", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ceilDiv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "max", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "min", data: BytesLike): Result;

  events: {};
}

export interface MathMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MathMockInterface;

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
    average(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ceilDiv(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    max(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    min(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  average(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ceilDiv(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  max(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  min(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    average(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ceilDiv(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    max(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    min(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    average(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ceilDiv(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    max(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    min(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    average(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ceilDiv(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    max(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    min(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}