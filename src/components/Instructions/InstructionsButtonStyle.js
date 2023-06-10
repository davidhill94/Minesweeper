import styled from "styled-components";

export const InstructionsBtn = styled.button`
padding: 0.25rem;
border-radius: 50%;
border: 1px solid #fff;
height: 25px;
width: 25px;
cursor: pointer;
background-color: var(--theme-secondary);

&:hover{
    background-color: var(--theme-primary);
    color: #fff;
}
`