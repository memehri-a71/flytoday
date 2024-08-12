
import moment from "jalali-moment";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

interface Passengers{
       id: 'adult'|'child'|'baby'
            type: 'بزرگسال'|'کودک'|'نوزاد'
            description: string
            count: number
}
interface InitialValues{
    origin: Record<string,any>
    destination: Record<string,any>
    date: Date
    passengers:Passengers[] 
}
export const useSearchBoxViewModel = () => {
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()
    const initialValues = {
        origin: "",
        destination: "",
        date: "",
        passengers: [{
            id: 'adult',
            type: 'بزرگسال',
            description: 'بالای 12 سال',
            count: 1
        },
        {
            id: 'child',
            type: 'کودک',
            description: '2 تا 12 سال',
            count: 0
        },
        {
            id: 'baby',
            type: 'نوزاد',
            description: 'زیر 2 سال',
            count: 0
        }
        ]
    };
    const validationSchema = yup.object({
        origin: yup
            .object()
            .required("این فیلد الزامی است."),
        destination: yup
            .object()
            .required("این فیلد الزامی است."),
    });

    const handleChangeDestination = ({ values, setFieldValue }:{ values:InitialValues, setFieldValue:any }) => {
        setFieldValue('origin', values?.destination)
        setFieldValue('destination', values?.origin)
    }

    const onSubmit = (values:InitialValues) => {
        const departureDate = moment(values.date).format('YYYY-MM-DD')
        const url = `/flight/search?departure=${values?.origin?.iata}&arrival=${values?.destination?.iata}&departureDate=${departureDate}`
        router.push(url);
    }


    return {
        initialValues,
        validationSchema,
        handleChangeDestination,
        onSubmit,
        showMenu,
        setShowMenu
    };
}
