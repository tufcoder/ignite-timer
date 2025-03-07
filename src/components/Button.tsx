import { Question } from '@phosphor-icons/react'

import { ButtonContainer, ButtonVariant } from './Button.styles'

type ButtonProps = {
  variant?: ButtonVariant,
  icon?: boolean,
}

export const Button = ({ variant = 'primary', icon = true }: ButtonProps) => {
  return (
    <ButtonContainer variant={variant}>
      {icon && <Question size={20} />}
      Enviar
    </ButtonContainer>
  )
}
