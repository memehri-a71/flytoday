import React from 'react'
import { CounterButtonView } from './view'
import { useCounterButtonViewModel } from './viewModel'

export const CounterButton = ({ quantity, setQuantity ,onChangeHandler}) => {
  const { incrementHandler, decrementHandler } = useCounterButtonViewModel(
    quantity,
    setQuantity,onChangeHandler
  )

  return (
    <CounterButtonView
      quantity={quantity}
      incrementHandler={incrementHandler}
      decrementHandler={decrementHandler}
    />
  )
}
