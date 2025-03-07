import { useContext } from "react";
import { formatDistanceToNow } from 'date-fns'

import { CyclesContext } from "../../contexts/CyclesContext";

import {
  HistoryContainer,
  HistoryTableContainer,
  Status,
} from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My History</h1>
      <HistoryTableContainer>
        {cycles.length == 0 && <p>No history to show...</p>}
        {cycles.length > 0 &&
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Duration</th>
                <th>Start</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map(cycle => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount} minutes</td>
                    <td>{formatDistanceToNow(cycle.startDate, { addSuffix: true })}</td>
                    <td>
                      {cycle.finishedDate && <Status $statusColor="green">Completed</Status>}
                      {cycle.interruptedDate && <Status $statusColor="red">Interrupted</Status>}
                      {!cycle.finishedDate && !cycle.interruptedDate && <Status $statusColor="yellow">In Progress</Status>}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>}
      </HistoryTableContainer>
    </HistoryContainer>
  )
}
