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
            .string()
            .required("این فیلد الزامی است."),
        destination: yup
            .string()
            .required("این فیلد الزامی است."),
    });

    const onSubmit = (values) => {
        console.log(values);

    }
    return { initialValues, validationSchema, onSubmit };
}
