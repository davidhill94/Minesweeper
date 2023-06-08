import React from 'react';
import { handleInstructionsModal } from '../../functions/HandleInstructionsModal';
import { InstructionsBtn } from './InstructionsButtonStyle'

const InstructionsButton = ({ setInstructionsModal, instructionsModal }) => {
  return (
    <InstructionsBtn onClick={() => handleInstructionsModal(setInstructionsModal, instructionsModal)}>i</InstructionsBtn>
  )
}

export default InstructionsButton