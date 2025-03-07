import styled from "styled-components"

import { flexCenter, transition } from "../../../../styles/utils"

export const FormContainer = styled.div`
  width: 100%;
  ${flexCenter({ gap: '0.5rem' })}
  color: ${props => props.theme["gray-100"]};
  font-size: 1.125rem;
`

const BaseInput = styled.input`
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme["gray-500"]};
  padding: 0 0.5rem;
  font-size: inherit;
  font-weight: bold;
  color: ${props => props.theme["gray-100"]};
  background-color: transparent;
  ${transition({ transition: 'border-color' })}

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${props => props.theme["gray-500"]};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
