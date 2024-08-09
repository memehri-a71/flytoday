import { MinusIcon, PlusIcon } from '@/utile/icons'
import React from 'react'


export const CounterButtonView = ({
  quantity,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <div className="flex justify-between gap-4 bg-tint-100 rounded-full py-3">
      <button
        type="button"
        className="cursor-pointer"
        disabled={quantity?.max === 1}
        onClick={incrementHandler}
      >
        <PlusIcon
          className="w-6 h-6"
          color={
            quantity?.max === 1
              ? 'var(--gray-primary)'
              : 'black'
          }
        />
      </button>
      <p className="text-sm font-bold text-primary-default">
        {quantity?.current}
      </p>
      <button
        type="button"
        className="cursor-pointer"
        disabled={quantity?.current === quantity?.min}
        onClick={decrementHandler}
      >
        <MinusIcon
          className="w-4 h-4"
          color={
            quantity?.current === quantity?.min
              ? 'var(--gray-primary)'
              : 'black'
          }
        />
      </button>
    </div>
  )
}
