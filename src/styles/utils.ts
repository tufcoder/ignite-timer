import { css } from "styled-components"

type FlexFlowType = {
  align?: boolean
  justify?: boolean
  direction?: 'row' | 'column'
  wrap?: 'wrap' | 'nowrap'
  gap?: string
}

type TransitionType = {
  transition: string
}

export const flexCenter = (
  {
    align = true,
    justify = true,
    direction = 'row',
    wrap = 'nowrap',
    gap = 'none'
  }: FlexFlowType
) => css`
  display: flex;
  align-items: ${align ? 'center' : 'none'};
  justify-content: ${justify ? 'center' : 'none'};
  flex-flow: ${direction} ${wrap};
  gap: ${gap};
`

export const transition = ({ transition }: TransitionType) => css`
  transition: ${transition} 0.3s ease;
`
