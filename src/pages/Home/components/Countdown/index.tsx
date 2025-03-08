import { useContext, useEffect } from "react";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";

import { CyclesContext } from "../../../../contexts/CyclesContext";

const originalTitle = document.title

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    secondsPassed,
    finishedCurrentCycle,
    proxySetSecondsPassed
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0
  const calculateMinutes = Math.floor(currentSeconds / 60)
  const calculateSeconds = currentSeconds % 60
  const minutes = String(calculateMinutes).padStart(2, '0')
  const seconds = String(calculateSeconds).padStart(2, '0')

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        )
        if (secondsDifference >= totalSeconds) {
          finishedCurrentCycle()
          proxySetSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          proxySetSecondsPassed(secondsDifference)
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval)
    }
  },
    [
      activeCycle,
      activeCycleId,
      totalSeconds,
      finishedCurrentCycle,
      proxySetSecondsPassed
    ]
  )

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle.task}`
    } else {
      document.title = originalTitle
    }
  }, [activeCycle, minutes, seconds])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
