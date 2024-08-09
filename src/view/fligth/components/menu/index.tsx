import { CounterMenuView } from './view'
import { useCounterMenuViewModel } from './viewModel'

export const CounterMenu = ({ name }) => {
  const { passengersInfo, handlePassengerNumber,xHandler } = useCounterMenuViewModel(name)

  return (
    <CounterMenuView
      passengersInfo={passengersInfo}
      handlePassengerNumber={handlePassengerNumber}
      xHandler={xHandler}
    />
  )
}
