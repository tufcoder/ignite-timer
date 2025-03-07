import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

type ButtonContainerProps = {
  variant: ButtonVariant
}

// const buttonVariants = {
//   primary: 'purple',
//   secondary: 'orange',
//   danger: 'red',
//   success: 'green',
// }

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 130px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 0.25rem;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme['green-500']};
`
