import { useFormikContext } from "formik";
import * as yup from "yup";

export const useSearchViewModel = () => {


    const initialValues = {
        origin: "",
        destination: "",
        date: "",
        passengers: ''
    };
    const validationSchema = yup.object({
        origin: yup
            .object()
            .required("این فیلد الزامی است."),
        destination: yup
            .object()
            .required("این فیلد الزامی است."),
    });

    const handleChangeDestination = ({ values, setFieldValue }) => {
        console.log('values', values)
        setFieldValue('origin', values?.destination)
        setFieldValue('destination', values?.origin)
    }

    const onSubmit = (values) => {
        console.log(values);
    }

    return {
        initialValues,
        validationSchema,
        handleChangeDestination,
        onSubmit,
    };
}
