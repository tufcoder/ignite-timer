import { createContext } from "react";

export type CreateCycle = {
  task: string
  minutesAmount: number
}

export type Cycle = {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

type CyclesContextType = {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  secondsPassed: number
  createNewCycle: (data: CreateCycle) => void
  interruptCurrentCycle: () => void
  finishedCurrentCycle: () => void
  proxySetSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextType)
