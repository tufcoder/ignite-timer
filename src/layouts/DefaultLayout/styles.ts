import styled from "styled-components";

export const LayoutContainer = styled.div`
  /* 1184px */
  max-width: 74rem;
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  border-radius: 0.5rem;
  padding: 2.5rem;
  background-color: ${props => props.theme["gray-800"]};
`
