import styled from "styled-components";
import { flexCenter } from "../../styles/utils";

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme["gray-100"]};
  }
`

export const HistoryTableContainer = styled.div`
  flex: 1;
  margin-top: 2rem;
  overflow: auto;

  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;

    th {
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${props => props.theme["gray-100"]};
      background-color: ${props => props.theme["gray-600"]};

      &:first-child {
        border-top-left-radius: 0.5rem;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
        padding-right: 1.5rem;
      }
    }

    td {
      border-top: 4px solid ${props => props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      background-color: ${props => props.theme["gray-700"]};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

export const STATUS_COLORS = {
  yellow: "yellow-500",
  red: "red-500",
  green: "green-500",
} as const

type StatusProps = {
  $statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  ${flexCenter({ justify: false, gap: '0.5rem' })}

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme[STATUS_COLORS[props.$statusColor]]};
  }
`
