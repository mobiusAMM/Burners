/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MobiusEthBurnerInterface extends utils.Interface {
  contractName: "MobiusEthBurner";
  functions: {
    "MinimaRouter()": FunctionFragment;
    "MobiusWrapper()": FunctionFragment;
    "burn(address)": FunctionFragment;
    "emergencyOwner()": FunctionFragment;
    "is_killed()": FunctionFragment;
    "owner()": FunctionFragment;
    "receiver()": FunctionFragment;
    "recover_balance(address)": FunctionFragment;
    "recoveryReceiver()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setEmergencyOwner(address)": FunctionFragment;
    "setKilled(bool)": FunctionFragment;
    "setMinima(address)": FunctionFragment;
    "setMobiusWrapper(address)": FunctionFragment;
    "setReciever(address)": FunctionFragment;
    "setRecovery(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MinimaRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MobiusWrapper",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [string]): string;
  encodeFunctionData(
    functionFragment: "emergencyOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "is_killed", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recover_balance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "recoveryReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setEmergencyOwner",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setKilled", values: [boolean]): string;
  encodeFunctionData(functionFragment: "setMinima", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setMobiusWrapper",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setReciever", values: [string]): string;
  encodeFunctionData(functionFragment: "setRecovery", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "MinimaRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MobiusWrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "is_killed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recover_balance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoveryReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEmergencyOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKilled", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMinima", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMobiusWrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReciever",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface MobiusEthBurner extends BaseContract {
  contractName: "MobiusEthBurner";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MobiusEthBurnerInterface;

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
    MinimaRouter(overrides?: CallOverrides): Promise<[string]>;

    MobiusWrapper(overrides?: CallOverrides): Promise<[string]>;

    burn(
      coin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyOwner(overrides?: CallOverrides): Promise<[string]>;

    is_killed(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    receiver(overrides?: CallOverrides): Promise<[string]>;

    recover_balance(
      coin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recoveryReceiver(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEmergencyOwner(
      newEmergencyOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKilled(
      isKilled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinima(
      minimaAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMobiusWrapper(
      wrapper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReciever(
      newReciever: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRecovery(
      newRecovery: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  MinimaRouter(overrides?: CallOverrides): Promise<string>;

  MobiusWrapper(overrides?: CallOverrides): Promise<string>;

  burn(
    coin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyOwner(overrides?: CallOverrides): Promise<string>;

  is_killed(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  receiver(overrides?: CallOverrides): Promise<string>;

  recover_balance(
    coin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recoveryReceiver(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEmergencyOwner(
    newEmergencyOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKilled(
    isKilled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinima(
    minimaAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMobiusWrapper(
    wrapper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReciever(
    newReciever: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRecovery(
    newRecovery: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MinimaRouter(overrides?: CallOverrides): Promise<string>;

    MobiusWrapper(overrides?: CallOverrides): Promise<string>;

    burn(coin: string, overrides?: CallOverrides): Promise<boolean>;

    emergencyOwner(overrides?: CallOverrides): Promise<string>;

    is_killed(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    receiver(overrides?: CallOverrides): Promise<string>;

    recover_balance(coin: string, overrides?: CallOverrides): Promise<boolean>;

    recoveryReceiver(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setEmergencyOwner(
      newEmergencyOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setKilled(isKilled: boolean, overrides?: CallOverrides): Promise<void>;

    setMinima(minimaAddress: string, overrides?: CallOverrides): Promise<void>;

    setMobiusWrapper(wrapper: string, overrides?: CallOverrides): Promise<void>;

    setReciever(newReciever: string, overrides?: CallOverrides): Promise<void>;

    setRecovery(newRecovery: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    MinimaRouter(overrides?: CallOverrides): Promise<BigNumber>;

    MobiusWrapper(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      coin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyOwner(overrides?: CallOverrides): Promise<BigNumber>;

    is_killed(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    receiver(overrides?: CallOverrides): Promise<BigNumber>;

    recover_balance(
      coin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recoveryReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEmergencyOwner(
      newEmergencyOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKilled(
      isKilled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinima(
      minimaAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMobiusWrapper(
      wrapper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReciever(
      newReciever: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRecovery(
      newRecovery: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MinimaRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MobiusWrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      coin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    is_killed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recover_balance(
      coin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recoveryReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEmergencyOwner(
      newEmergencyOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKilled(
      isKilled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinima(
      minimaAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMobiusWrapper(
      wrapper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReciever(
      newReciever: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRecovery(
      newRecovery: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}