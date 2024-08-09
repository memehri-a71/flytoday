import { useFormikContext } from 'formik'
import React, { useState } from 'react'

export const useCounterMenuViewModel = (name) => {
    const { setFieldValue } = useFormikContext()
console.log(name);


    const [quantity, setQuantity] = useState({
        id: '',
        max: 100,
        min: 1,
        current: 0,
    })
    const passengersInfo = [{
        id: 1,
        type: 'بزرگسال',
        description: 'بالای 12 سال'
    },
        //  {
        //     id: 2,
        //     type: 'کودک',
        //     description: '2 تا 12 سال'
        // }, {
        //     id: 3,
        //     type: 'نوزاد',
        //     description: 'زیر 2 سال'
        // }
    ]
    const handlePassengerNumber = () => {
        console.log(name);
        
        setFieldValue(name, quantity.current)
    }

    return {
        quantity, setQuantity, passengersInfo,handlePassengerNumber
    }
}
