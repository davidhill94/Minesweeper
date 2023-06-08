import React from 'react'
import { MineCountContainer } from './MineCountStyles'

const MineCount = ({ mineCount }) => {

  return (
    <MineCountContainer>
        <p>Mine Count: {mineCount}</p>
    </MineCountContainer>
  )
}

export default MineCount