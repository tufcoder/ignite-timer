import { useContext } from "react";
import { HandPalm, Play } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { NewCycle } from "./components/NewCycle";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";

const formSchema = z.object({
  task: z.string().min(1, 'Inform a task'),
  minutesAmount: z.number()
    .min(5, 'The cycle must be min of 5 minutes.')
    .max(60, 'The cycle must be max of 60 minutes.'),
})

type NewCycleFormData = z.infer<typeof formSchema>

/**
 * Prop Drilling: Quando a gente tem MUITAS propriedades APENAS para comunicação entre componentes
 * Context API:  Permite compartilharmos informações entre VÁRIOS componentes ao mesmo tempo
 */
export function Home() {
  const {
    activeCycle,
    createNewCycle,
    interruptCurrentCycle
  } = useContext(CyclesContext)

  const newCycleForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const isSubmitDisabled = watch('task')

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycle />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton
            type="button"
            onClick={interruptCurrentCycle}
          >
            <HandPalm size={24} />
            Stop
          </StopCountdownButton>
        ) : (
          <StartCountdownButton
            type="submit"
            disabled={!isSubmitDisabled}
          >
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
