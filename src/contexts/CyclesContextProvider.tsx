import { ReactNode, useEffect, useReducer, useState } from "react";

import {
  CyclesContext,
  CreateCycle,
  Cycle
} from "./CyclesContext";

import {
  ActionTypes,
  CyclesState,
  CyclesAction,
  cyclesStateReducer
} from "../reducers/cycles";
import { differenceInSeconds } from "date-fns";

type Props = {
  children: ReactNode
}

const initialState: CyclesState = {
  cycles: [],
  activeCycleId: null
}

export function CyclesContextProvider({ children }: Props) {
  const [cyclesState, dispatch] = useReducer(
    cyclesStateReducer,
    initialState,
    (initialState) => {
      const cyclesStateJson = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')
      if (cyclesStateJson) {
        return JSON.parse(cyclesStateJson)
      }
      return initialState
    }
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const [secondsPassed, setSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), activeCycle.startDate)
    }
    return 0
  })

  function createNewCycle(data: CreateCycle) {
    const { task, minutesAmount } = data
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }
    const dispatchObject: CyclesAction = {
      type: ActionTypes.ADD,
      payload: { newCycle }
    }
    dispatch(dispatchObject)
    setSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    const dispatchObject: CyclesAction = {
      type: ActionTypes.INTERRUPT,
      payload: { activeCycleId }
    }
    dispatch(dispatchObject)
  }

  function finishedCurrentCycle() {
    const dispatchObject: CyclesAction = {
      type: ActionTypes.FINISH,
      payload: { activeCycleId }
    }
    dispatch(dispatchObject)
  }

  function proxySetSecondsPassed(seconds: number) {
    setSecondsPassed(seconds)
  }

  useEffect(() => {
    const cyclesStateJson = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', cyclesStateJson)
  }, [cyclesState])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        secondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        finishedCurrentCycle,
        proxySetSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
