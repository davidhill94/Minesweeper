import styled from 'styled-components';

export const BoardContainer = styled.div`
width: auto;
height: auto;
display: grid;
font-family: var(--font-primary);
box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
pointer-events: ${(props) => (props.mineClicked ? "none" : "auto")};
`