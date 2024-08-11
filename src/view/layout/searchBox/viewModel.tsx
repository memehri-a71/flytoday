
import { useRouter } from "next/navigation";
import {  useState } from "react";
import * as yup from "yup";

export const useSearchBoxViewModel = () => {
    const [showMenu, setShowMenu] = useState(false)
    const router=useRouter()
    const initialValues = {
        origin: "j",
        destination: "k",
        date: "",
        passengers: ''
    };
    const validationSchema = yup.object({
        origin: yup
            .string()
            .required("این فیلد الزامی است."),
        destination: yup
            .string()
            .required("این فیلد الزامی است."),
    });

    const handleChangeDestination = ({ values, setFieldValue }) => {
        setFieldValue('origin', values?.destination)
        setFieldValue('destination', values?.origin)
    }

    const onSubmit = (values) => {
        console.log(values);
        const url=`/flight/search?departure=${values?.origin}&arrival=${values?.destination}&departureDate=${values?.date}&adt=1&chd=2&inf=1`
        router.push(url);
    }


    return {
        initialValues,
        validationSchema,
        handleChangeDestination,
        onSubmit, showMenu, setShowMenu
    };
}
