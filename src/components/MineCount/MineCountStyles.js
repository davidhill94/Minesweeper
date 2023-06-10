import styled from "styled-components";

export const MineCountContainer = styled.div`
display: grid;
grid-template-columns: 20% 60% 20%;
place-items: center;
align-items: center;
justify-content: space-between;
width: 33%;
color: #fff;
font-family: var(--font-primary);
font-size: 1.5rem;
margin: 0.5rem;

@media screen and (max-width: 960px){
    width: 45%;
}
@media screen and (max-width: 768px){
    width: 50%;
}
@media screen and (max-width: 650px){
    width: 75%;
}
`