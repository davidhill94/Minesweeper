import styled from "styled-components";

export const SettingsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0.5rem;
`

export const SettingsBtn = styled.button`
padding: 0.5rem;
margin: 0 0.5rem;
border-radius: 3px;
border: 1px solid var(--theme-secondary);
cursor: pointer;
background-color: var(--theme-primary);
color: var(--theme-secondary);
pointer-events: ${(props) => (props.mineClicked ? "none" : "auto")};

&:hover{
    color: var(--theme-primary);
    background-color: var(--theme-secondary);
}
`