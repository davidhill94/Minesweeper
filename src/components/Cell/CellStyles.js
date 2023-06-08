import styled from "styled-components";

export const CellContainer = styled.div`
width: ${(props) => (props.difficulty === "beginner" ? "25px" : props.difficulty === "intermediate" ? "20px" : "18px")};
height: ${(props) => (props.difficulty === "beginner" ? "25px" : props.difficulty === "intermediate" ? "20px" : "18px")};
border: 1px solid #000;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background-color: var(--theme-secondary);
font-size: 0;
cursor: pointer;

&.mine{
    background-color: var(--theme-mine);
    font-size: ${(props) => (props.difficulty === "beginner" ? "1rem" : props.difficulty === "intermediate" ? "0.8rem" : "0.8rem")};
}
&.number{
    background-color: var(--theme-safe);
    font-size: ${(props) => (props.difficulty === "beginner" ? "1rem" : props.difficulty === "intermediate" ? "0.8rem" : "0.8rem")};
}
&.empty{
    background-color: var(--theme-empty);
    font-size: 0;
}
&.marked{
    background-color: var(--theme-primary);
    font-size: ${(props) => (props.difficulty === "beginner" ? "1rem" : props.difficulty === "intermediate" ? "0.8rem" : "0.6rem")};
    color: var(--theme-secondary);
}
`