// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class HandleCalculation extends ethereum.Event {
  get params(): HandleCalculation__Params {
    return new HandleCalculation__Params(this);
  }
}

export class HandleCalculation__Params {
  _event: HandleCalculation;

  constructor(event: HandleCalculation) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get cal(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get count(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class HandleLazyMint extends ethereum.Event {
  get params(): HandleLazyMint__Params {
    return new HandleLazyMint__Params(this);
  }
}

export class HandleLazyMint__Params {
  _event: HandleLazyMint;

  constructor(event: HandleLazyMint) {
    this._event = event;
  }

  get signer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get minter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class HandleMint extends ethereum.Event {
  get params(): HandleMint__Params {
    return new HandleMint__Params(this);
  }
}

export class HandleMint__Params {
  _event: HandleMint;

  constructor(event: HandleMint) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get serial(): string {
    return this._event.parameters[2].value.toString();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class HandleMintBulk extends ethereum.Event {
  get params(): HandleMintBulk__Params {
    return new HandleMintBulk__Params(this);
  }
}

export class HandleMintBulk__Params {
  _event: HandleMintBulk;

  constructor(event: HandleMintBulk) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get serial(): Array<string> {
    return this._event.parameters[2].value.toStringArray();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class HandleUpdateUri extends ethereum.Event {
  get params(): HandleUpdateUri__Params {
    return new HandleUpdateUri__Params(this);
  }
}

export class HandleUpdateUri__Params {
  _event: HandleUpdateUri;

  constructor(event: HandleUpdateUri) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newTokenURI(): string {
    return this._event.parameters[1].value.toString();
  }

  get updator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get oldTokenURI(): string {
    return this._event.parameters[3].value.toString();
  }

  get count(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class HandleUpdatedBulkUri extends ethereum.Event {
  get params(): HandleUpdatedBulkUri__Params {
    return new HandleUpdatedBulkUri__Params(this);
  }
}

export class HandleUpdatedBulkUri__Params {
  _event: HandleUpdatedBulkUri;

  constructor(event: HandleUpdatedBulkUri) {
    this._event = event;
  }

  get tokenId(): Array<BigInt> {
    return this._event.parameters[0].value.toBigIntArray();
  }

  get newTokenURI(): Array<string> {
    return this._event.parameters[1].value.toStringArray();
  }

  get updator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get oldTokenURI(): string {
    return this._event.parameters[3].value.toString();
  }

  get count(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class HanldeSetfee extends ethereum.Event {
  get params(): HanldeSetfee__Params {
    return new HanldeSetfee__Params(this);
  }
}

export class HanldeSetfee__Params {
  _event: HanldeSetfee;

  constructor(event: HanldeSetfee) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TransferMultipleNft extends ethereum.Event {
  get params(): TransferMultipleNft__Params {
    return new TransferMultipleNft__Params(this);
  }
}

export class TransferMultipleNft__Params {
  _event: TransferMultipleNft;

  constructor(event: TransferMultipleNft) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenIDs(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class GalileoProtocol__feeResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getAmount(): BigInt {
    return this.value0;
  }

  getToken(): Address {
    return this.value1;
  }

  getFee(): BigInt {
    return this.value2;
  }

  getUser(): Address {
    return this.value3;
  }

  getTime(): BigInt {
    return this.value4;
  }
}

export class GalileoProtocol__updateResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: string;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: string,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getTokenId(): BigInt {
    return this.value0;
  }

  getUpdater(): Address {
    return this.value1;
  }

  getOldURI(): string {
    return this.value2;
  }

  getNewURI(): string {
    return this.value3;
  }

  getTime(): BigInt {
    return this.value4;
  }
}

export class GalileoProtocol extends ethereum.SmartContract {
  static bind(address: Address): GalileoProtocol {
    return new GalileoProtocol("GalileoProtocol", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  SUB_ADMIN_ROLE(): Bytes {
    let result = super.call("SUB_ADMIN_ROLE", "SUB_ADMIN_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_SUB_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "SUB_ADMIN_ROLE",
      "SUB_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  count(param0: Address): BigInt {
    let result = super.call("count", "count(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_count(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("count", "count(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fee(param0: Address, param1: BigInt): GalileoProtocol__feeResult {
    let result = super.call(
      "fee",
      "fee(address,uint256):(uint256,address,uint256,address,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new GalileoProtocol__feeResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt()
    );
  }

  try_fee(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<GalileoProtocol__feeResult> {
    let result = super.tryCall(
      "fee",
      "fee(address,uint256):(uint256,address,uint256,address,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GalileoProtocol__feeResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt()
      )
    );
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getFee(): BigInt {
    let result = super.call("getFee", "getFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getFee", "getFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  serialid(param0: BigInt): string {
    let result = super.call("serialid", "serialid(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_serialid(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("serialid", "serialid(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  update(param0: BigInt, param1: BigInt): GalileoProtocol__updateResult {
    let result = super.call(
      "update",
      "update(uint256,uint256):(uint256,address,string,string,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new GalileoProtocol__updateResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt()
    );
  }

  try_update(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<GalileoProtocol__updateResult> {
    let result = super.tryCall(
      "update",
      "update(uint256,uint256):(uint256,address,string,string,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GalileoProtocol__updateResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt()
      )
    );
  }

  updatecount(param0: Address): BigInt {
    let result = super.call("updatecount", "updatecount(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_updatecount(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "updatecount",
      "updatecount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get subAdmin(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get fees(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get marketPlaces(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get factory(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get owner(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BulkMintCall extends ethereum.Call {
  get inputs(): BulkMintCall__Inputs {
    return new BulkMintCall__Inputs(this);
  }

  get outputs(): BulkMintCall__Outputs {
    return new BulkMintCall__Outputs(this);
  }
}

export class BulkMintCall__Inputs {
  _call: BulkMintCall;

  constructor(call: BulkMintCall) {
    this._call = call;
  }

  get tokenURI(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get seller(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class BulkMintCall__Outputs {
  _call: BulkMintCall;

  constructor(call: BulkMintCall) {
    this._call = call;
  }
}

export class BuyNftCall extends ethereum.Call {
  get inputs(): BuyNftCall__Inputs {
    return new BuyNftCall__Inputs(this);
  }

  get outputs(): BuyNftCall__Outputs {
    return new BuyNftCall__Outputs(this);
  }
}

export class BuyNftCall__Inputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }

  get voucher(): BuyNftCallVoucherStruct {
    return changetype<BuyNftCallVoucherStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get seller(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class BuyNftCall__Outputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }
}

export class BuyNftCallVoucherStruct extends ethereum.Tuple {
  get uri(): string {
    return this[0].toString();
  }

  get price(): BigInt {
    return this[1].toBigInt();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get signature(): Bytes {
    return this[3].toBytes();
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tokenURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get seller(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get fees(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferNftBunchCall extends ethereum.Call {
  get inputs(): TransferNftBunchCall__Inputs {
    return new TransferNftBunchCall__Inputs(this);
  }

  get outputs(): TransferNftBunchCall__Outputs {
    return new TransferNftBunchCall__Outputs(this);
  }
}

export class TransferNftBunchCall__Inputs {
  _call: TransferNftBunchCall;

  constructor(call: TransferNftBunchCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenIDs(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class TransferNftBunchCall__Outputs {
  _call: TransferNftBunchCall;

  constructor(call: TransferNftBunchCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateBulkUriCall extends ethereum.Call {
  get inputs(): UpdateBulkUriCall__Inputs {
    return new UpdateBulkUriCall__Inputs(this);
  }

  get outputs(): UpdateBulkUriCall__Outputs {
    return new UpdateBulkUriCall__Outputs(this);
  }
}

export class UpdateBulkUriCall__Inputs {
  _call: UpdateBulkUriCall;

  constructor(call: UpdateBulkUriCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get tokenURIs(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }
}

export class UpdateBulkUriCall__Outputs {
  _call: UpdateBulkUriCall;

  constructor(call: UpdateBulkUriCall) {
    this._call = call;
  }
}

export class UpdateUriCall extends ethereum.Call {
  get inputs(): UpdateUriCall__Inputs {
    return new UpdateUriCall__Inputs(this);
  }

  get outputs(): UpdateUriCall__Outputs {
    return new UpdateUriCall__Outputs(this);
  }
}

export class UpdateUriCall__Inputs {
  _call: UpdateUriCall;

  constructor(call: UpdateUriCall) {
    this._call = call;
  }

  get tokenIds(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenURIs(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateUriCall__Outputs {
  _call: UpdateUriCall;

  constructor(call: UpdateUriCall) {
    this._call = call;
  }
}

export class UpdateUriAdminCall extends ethereum.Call {
  get inputs(): UpdateUriAdminCall__Inputs {
    return new UpdateUriAdminCall__Inputs(this);
  }

  get outputs(): UpdateUriAdminCall__Outputs {
    return new UpdateUriAdminCall__Outputs(this);
  }
}

export class UpdateUriAdminCall__Inputs {
  _call: UpdateUriAdminCall;

  constructor(call: UpdateUriAdminCall) {
    this._call = call;
  }

  get tokenIds(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenURIs(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateUriAdminCall__Outputs {
  _call: UpdateUriAdminCall;

  constructor(call: UpdateUriAdminCall) {
    this._call = call;
  }
}