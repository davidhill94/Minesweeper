import React from 'react'
import { SettingsBtn, SettingsContainer } from './SettingsStyles'

const Settings = ({ setHeight, setWidth, setMines, setMineCount, beginnerDifficulty, intermediateDifficulty, hardDifficulty, setDifficulty, setMinesRemaining, mineClicked }) => {
    return (
        <SettingsContainer>
            <SettingsBtn mineClicked={mineClicked} onClick={() => beginnerDifficulty(setHeight, setWidth, setMines, setMineCount, setMinesRemaining, setDifficulty)}>Beginner</SettingsBtn>
            <SettingsBtn mineClicked={mineClicked} onClick={() => intermediateDifficulty(setHeight, setWidth, setMines, setMineCount, setMinesRemaining, setDifficulty)}>Intermediate</SettingsBtn>
            <SettingsBtn mineClicked={mineClicked} onClick={() => hardDifficulty(setHeight, setWidth, setMines, setMineCount, setMinesRemaining, setDifficulty)}>Hard</SettingsBtn>
        </SettingsContainer>
    )
}

export default Settings