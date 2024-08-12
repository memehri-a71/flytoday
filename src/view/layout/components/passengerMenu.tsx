import { CounterBox, FormikSelect, MenuItem, useFormikContext } from "../imports"

export const PassengerMenu = ({ name }) => {
    const { values, setFieldValue } = useFormikContext()

    return (
        <FormikSelect>
            {values[name].map((item, index) => (
                <MenuItem key={item.type} value={item.type}>
                    <CounterBox
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
