
import { CounterBoxView } from '../counterBox/view'
import { MenuItem } from '@mui/material'
import {  useFormikContext } from 'formik'
import { FormikSelect } from '@/components/elements/select/formikSelect'


export const PassengerMenu = ({ name }:{name:string}) => {
    const { values, setFieldValue }:any= useFormikContext()
 
    return (
        <FormikSelect name={name}>
            {values[name].map((item:any, index:number) => (
                <MenuItem key={item.type} value={item.type}>
                    <CounterBoxView
                        key={index}
                        passengersInfo={item}
                        value={values[name][index]?.count}
                        incrementHandler={() =>
                            setFieldValue(
                                `passengers[${index}].count`,
                                Math.max(values[name][index].count + 1, 0)
                            )}
                        decrementHandler={() =>
                            setFieldValue(
                                `passengers[${index}].count`,
                                Math.max(values[name][index].count - 1, 0)
                            )}
                    />
                </MenuItem>
            ))}
        </FormikSelect>
    )
}
