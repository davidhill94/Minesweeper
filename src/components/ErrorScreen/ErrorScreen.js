import React from 'react'
import { ErrorContainer, ErrorMessage } from './ErrorScreenStyles'
import { FaBomb } from 'react-icons/fa'

const ErrorScreen = () => {
    return (
        <ErrorContainer>
            <ErrorMessage>
                <FaBomb />
                  Unfortunately, this game is only available to play on larger devices
                <FaBomb />
            </ErrorMessage>
        </ErrorContainer>
    )
}

export default ErrorScreen