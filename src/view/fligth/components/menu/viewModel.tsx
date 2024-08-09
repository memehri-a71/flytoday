import { useFormikContext } from 'formik'
import React, { useState } from 'react'

export const useCounterMenuViewModel = (name) => {
    const { setFieldValue } = useFormikContext()
    const [passengersNumber, setPassengersNumber] = useState([])

    const passengersInfo = [{
        id: 'adult',
        type: 'بزرگسال',
        description: 'بالای 12 سال'
    },
    {
        id: 'child',
        type: 'کودک',
        description: '2 تا 12 سال'
    },
        //  {
        //     id:'baby',
        //     type: 'نوزاد',
        //     description: 'زیر 2 سال'
        // }
    ]



    const xHandler = (value) => {
        console.log(value);

        setPassengersNumber(prev => [...prev, value])
    }
    console.log(passengersNumber);

    const handlePassengerNumber = () => {
        console.log(name);

        // setFieldValue(name, quantity.current)
    }

    return {
        passengersInfo, handlePassengerNumber, xHandler
    }
}
