import React from 'react'
import { MineCountContainer } from './MineCountStyles'
import InstructionsButton from '../Instructions/InstructionsButton'

const MineCount = ({ mineCount, setInstructionsModal, instructionsModal}) => {

  return (
    <MineCountContainer>
        <p>Mine Count: {mineCount}</p>
        <InstructionsButton setInstructionsModal={setInstructionsModal} instructionsModal={instructionsModal} />
    </MineCountContainer>
  )
}

export default MineCount