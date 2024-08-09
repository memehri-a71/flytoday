import { CounterMenuView } from './view'
import { useCounterMenuViewModel } from './viewModel'

export const CounterMenu = ({ name }) => {
  const { quantity, setQuantity, passengersInfo, handlePassengerNumber } = useCounterMenuViewModel(name)

  return (
    <CounterMenuView
      quantity={quantity}
      setQuantity={setQuantity}
      passengersInfo={passengersInfo}
      handlePassengerNumber={handlePassengerNumber}
    />
  )
}
