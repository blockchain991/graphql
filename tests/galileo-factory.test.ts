import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { GalileoProtocolDeployed } from "../generated/schema"
import { GalileoProtocolDeployed as GalileoProtocolDeployedEvent } from "../generated/GalileoFactory/GalileoFactory"
import { handleGalileoProtocolDeployed } from "../src/galileo-factory"
import { createGalileoProtocolDeployedEvent } from "./galileo-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _mintingContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newGalileoProtocolDeployedEvent = createGalileoProtocolDeployedEvent(
      _mintingContract
    )
    handleGalileoProtocolDeployed(newGalileoProtocolDeployedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("GalileoProtocolDeployed created and stored", () => {
    assert.entityCount("GalileoProtocolDeployed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "GalileoProtocolDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_mintingContract",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
