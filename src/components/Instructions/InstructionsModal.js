import React from 'react';
import { handleInstructionsModal } from '../../functions/HandleInstructionsModal';
import { CloseModal, InstructionsModalContainer, InstructionsText, InstructionsTitle } from './InstructionsModalStyles'
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaFlag } from 'react-icons/fa';

const InstructionsModal = ({ instructionsModal, setInstructionsModal}) => {
  return (
    <InstructionsModalContainer instructionsModal={instructionsModal}>
        <CloseModal onClick={() => handleInstructionsModal(setInstructionsModal, instructionsModal)}><AiFillCloseCircle /></CloseModal>
        <InstructionsTitle>How to play:</InstructionsTitle>
        <InstructionsText><FaFlag />  The aim of Minesweeper is to locate all the mines on the grid.</InstructionsText>
        <InstructionsText><FaFlag />  Each square will tell you how many mines are surrounding it.</InstructionsText>
        <InstructionsText><FaFlag />  You can mark where you think mines are located by right clicking on a square.</InstructionsText>
        <InstructionsText><FaFlag />  You lose when you click on a mine.</InstructionsText>
        <InstructionsText><FaFlag />  You win when you mark all the mines.</InstructionsText>
    </InstructionsModalContainer>
  )
}

export default InstructionsModal