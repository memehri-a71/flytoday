import { MinusIcon, PlusIcon } from '@/utile/icons'
import React from 'react'

interface Props{
    value:any
  incrementHandler:()=>void
  decrementHandler:()=>void
}
export const CounterButtonView = ({
  value,
  incrementHandler,
  decrementHandler,
}:Props) => {
  return (
    <div className="flex justify-between gap-4 bg-tint-100 rounded-full py-3">
      <button
        type="button"
        className="cursor-pointer"
        // disabled={value === 1}
        onClick={(e) => {
          e.stopPropagation()
          incrementHandler()
        }}
      >
        <PlusIcon
          className="w-6 h-6"
          color={
            value === 1
              ? 'var(--gray-primary)'
              : 'black'
          }
        />
      </button>
      <p className="text-sm font-bold text-primary-default">
        {value}
      </p>
      <button
        type="button"
        className="cursor-pointer"
        // disabled={value === value}
        onClick={(e) => {
          e.stopPropagation()
          decrementHandler()
        }}
      >
        <MinusIcon
          className="w-4 h-4"
          color={
            value === value
              ? 'var(--gray-primary)'
              : 'black'
          }
        />
      </button>
    </div>
  )
}
