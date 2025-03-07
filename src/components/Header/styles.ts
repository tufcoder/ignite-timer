import styled from "styled-components";

import { flexCenter, transition } from "../../styles/utils";

export const HeaderContainer = styled.header`
  ${flexCenter({})}
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;
    ${flexCenter({})}
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    color: ${props => props.theme["gray-100"]};
    ${transition({ transition: 'border-bottom' })}

    &:hover {
      border-bottom: 3px solid ${props => props.theme["green-500"]};

      &:has(img) {
        border-bottom: 3px solid transparent;
      }
    }

    &.active {
      color: ${props => props.theme["green-500"]};
    }
  }
`
