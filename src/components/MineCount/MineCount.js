import React from 'react'
import { MineCountContainer } from './MineCountStyles'
import InstructionsButton from '../Instructions/InstructionsButton'
import ToggleClick from '../ToggleClick/ToggleClick'

const MineCount = ({ mineCount, setInstructionsModal, instructionsModal, toggle, setToggle }) => {

  return (
    <MineCountContainer>
      <ToggleClick
        style={{ gridColumn: "1 / 2" }}
        toggle={toggle}
        setToggle={setToggle}
      />
      <p
        style={{ gridColumn: "2 / 3" }}
      >Mine Count: {mineCount}
      </p>
      <InstructionsButton
        style={{ gridColumn: "3 / 4" }}
        setInstructionsModal={setInstructionsModal}
        instructionsModal={instructionsModal}
      />
    </MineCountContainer>
  )
}

export default MineCount