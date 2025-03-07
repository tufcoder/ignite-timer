import styled from "styled-components";

import { flexCenter, transition } from "../../styles/utils";

export const HomeContainer = styled.div`
  flex: 1;
  ${flexCenter({ direction: "column" })}

  form {
    /* 56px */
    ${flexCenter({ justify: false, direction: 'column', gap: '3.5rem' })}
  }
`

const BaseCountdownButton = styled.button`
  width: 100%;
  ${flexCenter({ gap: '0.5rem' })}
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem;
  font-weight: bold;
  color: ${props => props.theme["gray-100"]};
  cursor: pointer;
  ${transition({ transition: 'background-color' })}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["green-500"]};

  &:not(:disabled):hover {
    background-color: ${props => props.theme["green-700"]};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["red-500"]};

  &:not(:disabled):hover {
    background-color: ${props => props.theme["red-700"]};
  }
`
