'use client'

interface QuantityType {
  max: number
  min: number
  current: number
}
export const useCounterButtonViewModel = (
  quantity: QuantityType,
  setQuantity,onChangeHandler
) => {
 
  
  const incrementHandler = ({ step = 1 }) => {
    const c={
      ...quantity,
      max: quantity.max - step,
      current:
        quantity.max - quantity.current <= quantity.max
          ? quantity.current + step
          : quantity.current,
    }
    onChangeHandler(c)
    debugger
    setQuantity(c)
  }

  const decrementHandler = ({ step = 1 }) => {
    setQuantity({
      ...quantity,
      max: quantity?.max + step,
      current:
        quantity?.current > quantity?.min
          ? quantity?.current - step
          : quantity?.min,
    })
  }

  return { incrementHandler, decrementHandler }
}
