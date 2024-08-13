'use client'

import Image from "next/image"
import pic from '@/assets/image/landing.png'

export const Flight = () => {
  return (
      <div >
        <Image src={pic}  width={2000} height={1000} alt='فلای تودی'/>
      </div>


  )
}
