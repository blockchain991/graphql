import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  HandleCalculation as HandleCalculationEvent,
  HandleLazyMint as HandleLazyMintEvent,
  HandleMint as HandleMintEvent,
  HandleMintBulk as HandleMintBulkEvent,
  HandleUpdateUri as HandleUpdateUriEvent,
  HandleUpdatedBulkUri as HandleUpdatedBulkUriEvent,
  HanldeSetfee as HanldeSetfeeEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Transfer as TransferEvent,
  TransferMultipleNft as TransferMultipleNftEvent
} from "../generated/templates/GalileoProtocol/GalileoProtocol"
import {
  Approval,
  ApprovalForAll,
  HandleCalculation,
  HandleLazyMint,
  HandleMint,
  HandleMintBulk,
  HandleUpdateUri,
  HandleUpdatedBulkUri,
  HanldeSetfee,
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer,
  TransferMultipleNft,
  GalileoProtocol
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHandleCalculation(event: HandleCalculationEvent): void {
  let entity = new HandleCalculation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin
  entity.amount = event.params.amount
  entity.cal = event.params.cal
  entity.count = event.params.count

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHandleLazyMint(event: HandleLazyMintEvent): void {
  let galileoProtocol = GalileoProtocol.load(event.address.toHexString())
  let entity = new HandleLazyMint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.signer = event.params.signer
  entity.minter = event.params.minter
  entity.price = event.params.price
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  if(galileoProtocol!=null){
  entity.collections = galileoProtocol.id
  galileoProtocol.save()
  }

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHandleMint(event: HandleMintEvent): void {
  let galileoProtocol = GalileoProtocol.load(event.address.toHexString())
  let entity = new HandleMint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minter = event.params.minter
  entity.tokenId = event.params.tokenId
  entity.serial = event.params.serial
  entity.seller = event.params.seller
  if(galileoProtocol!=null){
  entity.collections = galileoProtocol.id
  galileoProtocol.save()
  }

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHandleMintBulk(event: HandleMintBulkEvent): void {
  let galileoProtocol = GalileoProtocol.load(event.address.toHexString())

 let entity = new HandleMintBulk(
   event.transaction.hash.concatI32(event.logIndex.toI32())
 )
 entity.minter = event.params.minter
 entity.tokenId = event.params.tokenId
 entity.serial = event.params.serial
 entity.seller = event.params.seller
 if(galileoProtocol!=null){
  entity.collections = galileoProtocol.id
  galileoProtocol.save()
  }

 entity.blockNumber = event.block.number
 entity.blockTimestamp = event.block.timestamp
 entity.transactionHash = event.transaction.hash

 entity.save()
}

export function handleHandleUpdateUri(event: HandleUpdateUriEvent): void {
  let galileoProtocol = GalileoProtocol.load(event.address.toHexString())
  let entity = new HandleUpdateUri(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.newTokenURI = event.params.newTokenURI
  entity.updator = event.params.updator
  entity.oldTokenURI = event.params.oldTokenURI
  entity.count = event.params.count
  if(galileoProtocol!=null){
    entity.collections = galileoProtocol.id
    galileoProtocol.save()
    }

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHandleUpdatedBulkUri(
  event: HandleUpdatedBulkUriEvent
): void {
  let galileoProtocol = GalileoProtocol.load(event.address.toHexString())
  let entity = new HandleUpdatedBulkUri(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.newTokenURI = event.params.newTokenURI
  entity.updator = event.params.updator
  entity.oldTokenURI = event.params.oldTokenURI
  entity.count = event.params.count
  if(galileoProtocol!=null){
    entity.collections = galileoProtocol.id
    galileoProtocol.save()
    }
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHanldeSetfee(event: HanldeSetfeeEvent): void {
  let entity = new HanldeSetfee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
let galileoProtocol = GalileoProtocol.load(event.address.toHexString())
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  if(galileoProtocol!=null){
  entity.collections = galileoProtocol.id
  galileoProtocol.save()
  }

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferMultipleNft(
  event: TransferMultipleNftEvent
): void {
let galileoProtocol = GalileoProtocol.load(event.address.toHexString())
  let entity = new TransferMultipleNft(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenIDs = event.params.tokenIDs
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  if(galileoProtocol!=null){
    entity.collections = galileoProtocol.id
    galileoProtocol.save()
    }
    
  entity.save()
}
