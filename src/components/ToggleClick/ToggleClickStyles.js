import styled from "styled-components";

export const ToggleClickContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: var(--theme-primary);
`

export const ToggleNumber = styled.button`
font-size: 1rem;
border: 1px solid var(--theme-secondary);
border-radius: 3px 0px 0px 3px;
background-color: ${(props) => (props.toggle ? "var(--theme-primary)" : "var(--theme-secondary)")};
color:  ${(props) => (props.toggle ? "var(--theme-secondary)" : "#000")};
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const ToggleMark = styled.button`
font-size: 1rem;
border: 1px solid var(--theme-secondary);
border-radius: 0px 3px 3px 0px;
background-color: ${(props) => (props.toggle ? "var(--theme-secondary)" : "var(--theme-primary)")};
color:  ${(props) => (props.toggle ? "#000" : "var(--theme-secondary)")};
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`