import styled from "styled-components";

export const GameOverModal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 250px;
height: 50px;
background-color: #f0f0f0;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: space-evenly;
box-shadow: 10px 5px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
`

export const GameOverText = styled.p`
font-size: 1rem;
`

export const ResetBtn = styled.button`
padding: 0.5rem;
cursor: pointer;
border: 1px solid #000;
border-radius: 3px;
background-color: transparent;

&:hover {
    background-color: var(--theme-secondary);
}
`