import React from 'react'
import { ToggleClickContainer, ToggleNumber, ToggleMark } from './ToggleClickStyles';

import { FaFlag } from 'react-icons/fa';

const ToggleClick = ({ setToggle, toggle }) => {

    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <ToggleClickContainer>
        <ToggleNumber toggle={toggle} onClick={handleToggle}>1</ToggleNumber>
        <ToggleMark toggle={toggle} onClick={handleToggle}><FaFlag /></ToggleMark>
    </ToggleClickContainer>
  )
}

export default ToggleClick