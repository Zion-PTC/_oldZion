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

export interface ECDSAMockInterface extends utils.Interface {
  functions: {
    "recover(bytes32,bytes)": FunctionFragment;
    "recover_r_vs(bytes32,bytes32,bytes32)": FunctionFragment;
    "recover_v_r_s(bytes32,uint8,bytes32,bytes32)": FunctionFragment;
    "toEthSignedMessageHash(bytes32)": FunctionFragment;
    "toEthSignedMessageHash(bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "recover"
      | "recover_r_vs"
      | "recover_v_r_s"
      | "toEthSignedMessageHash(bytes32)"
      | "toEthSignedMessageHash(bytes)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "recover",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "recover_r_vs",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "recover_v_r_s",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "toEthSignedMessageHash(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "toEthSignedMessageHash(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recover_r_vs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recover_v_r_s",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toEthSignedMessageHash(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toEthSignedMessageHash(bytes)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ECDSAMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ECDSAMockInterface;

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
    recover(
      hash: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    recover_r_vs(
      hash: PromiseOrValue<BytesLike>,
      r: PromiseOrValue<BytesLike>,
      vs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    recover_v_r_s(
      hash: PromiseOrValue<BytesLike>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "toEthSignedMessageHash(bytes32)"(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "toEthSignedMessageHash(bytes)"(
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  recover(
    hash: PromiseOrValue<BytesLike>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  recover_r_vs(
    hash: PromiseOrValue<BytesLike>,
    r: PromiseOrValue<BytesLike>,
    vs: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  recover_v_r_s(
    hash: PromiseOrValue<BytesLike>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "toEthSignedMessageHash(bytes32)"(
    hash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "toEthSignedMessageHash(bytes)"(
    s: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    recover(
      hash: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    recover_r_vs(
      hash: PromiseOrValue<BytesLike>,
      r: PromiseOrValue<BytesLike>,
      vs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    recover_v_r_s(
      hash: PromiseOrValue<BytesLike>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "toEthSignedMessageHash(bytes32)"(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "toEthSignedMessageHash(bytes)"(
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    recover(
      hash: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recover_r_vs(
      hash: PromiseOrValue<BytesLike>,
      r: PromiseOrValue<BytesLike>,
      vs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recover_v_r_s(
      hash: PromiseOrValue<BytesLike>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toEthSignedMessageHash(bytes32)"(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toEthSignedMessageHash(bytes)"(
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    recover(
      hash: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recover_r_vs(
      hash: PromiseOrValue<BytesLike>,
      r: PromiseOrValue<BytesLike>,
      vs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recover_v_r_s(
      hash: PromiseOrValue<BytesLike>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toEthSignedMessageHash(bytes32)"(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toEthSignedMessageHash(bytes)"(
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}