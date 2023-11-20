import {
  GalileoProtocolDeployed as GalileoProtocolDeployedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  Initialized as InitializedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/GalileoFactory/GalileoFactory"
import {
  GalileoProtocolDeployed,
  RoleAdminChanged,
  Initialized,
  RoleGranted,
  RoleRevoked,
  GalileoProtocol
} from "../generated/schema"
import {GalileoProtocol as GalileoProtocolTemplate} from "../generated/templates";
import { Bytes } from '@graphprotocol/graph-ts'

export function handleGalileoProtocolDeployed(
  event: GalileoProtocolDeployedEvent
): void {

    let galileoProtocol = new GalileoProtocol(event.params._mintingContract.toHexString()) as GalileoProtocol
    
    //galileoProtocol.nftMint = Bytes.fromI32(0)
    
    // save updated values
    GalileoProtocolTemplate.create(event.params._mintingContract)

  let entity = new GalileoProtocolDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._mintingContract = event.params._mintingContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
  galileoProtocol.save()
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

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

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
