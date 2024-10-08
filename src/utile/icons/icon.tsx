interface Gate {
  className?: string
  onClick?: React.MouseEventHandler
  color?: string
  id?: string
  fill?: string
}

export const DirectionIcon = ({ className, color = 'white' }: Gate): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={color} className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>


  )
}

export const PlusIcon = ({
  className,
  color = 'white',
  fill = 'null',
}: Gate) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16H24"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 24V8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export const MinusIcon = ({ className, color }: Gate) => {
  return (
    <svg
      width="18"
      height="2"
      viewBox="0 0 18 2"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const CircleIcon = ({ className, color }: Gate) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={className} viewBox="0 0 24 24">
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
    </svg>
  )
}

export const ArrowTopIcon = ({ className, color, onClick }: Gate) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className={className}
      onClick={onClick}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}
