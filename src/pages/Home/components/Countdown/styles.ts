import styled from "styled-components"

import { flexCenter } from "../../../../styles/utils"

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme["gray-100"]};

  span {
    border-radius: 0.5rem;
    padding: 2rem 1rem;
    background-color: ${props => props.theme["gray-700"]};
  }
`

export const Separator = styled.div`
  width: 4rem;
  ${flexCenter({ wrap: 'wrap' })}
  padding: 2rem 0;
  color: ${props => props.theme["green-500"]};
  overflow: hidden;
`
