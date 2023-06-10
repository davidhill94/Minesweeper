import styled from "styled-components";

export const ErrorContainer = styled.div`
width: 100%;
height: 100vh;
background-color: var(--theme-primary);
color: var(--theme-secondary);
display: flex;
align-items: center;
justify-content: center;
font-family: var(--font-primary);
`

export const ErrorMessage = styled.p`
font-size: 1rem;
padding: 0 1rem;
text-align: center;
`