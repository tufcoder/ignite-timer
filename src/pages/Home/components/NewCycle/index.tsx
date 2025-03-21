import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { CyclesContext } from "../../../../contexts/CyclesContext";

import {
  FormContainer,
  MinutesAmountInput,
  TaskInput
} from "./styles";

export function NewCycle() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I will work on</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Give a name to your project"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <label htmlFor="minutesAmount">During</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  )
}
