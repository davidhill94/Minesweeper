import styled from "styled-components";

export const InstructionsModalContainer = styled.div`
width: 50%;
height: 100%;
position: absolute;
top: 0;
left: ${(props) => (props.instructionsModal ? "50%" : "-50%")};
transform: translateX(-50%);
background-color: var(--theme-secondary);
transition: 1s ease;
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
font-family: var(--font-primary);
padding: 0 3rem;
`

export const CloseModal = styled.button`
font-size: 2rem;
margin: 1rem;
cursor: pointer;
color: var(--theme-primary);
position: absolute;
top: 0;
left: 0;
background-color: transparent;
border: none;
`

export const InstructionsText = styled.p`
font-size: 1.25rem;
color: var(--theme-primary);
margin-bottom: 0.5rem;
`
export const InstructionsTitle = styled.p`
font-size: 1.5rem;
color: var(--theme-primary);
margin-bottom: 1rem;
`