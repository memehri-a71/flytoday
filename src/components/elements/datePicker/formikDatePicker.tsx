
import { Field } from 'formik'
import type { FieldAttributes } from 'formik'
import { CustomDatePicker } from './customDatePicker'


export const FormikDatePicker: React.FC<any> = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldAttributes<any>) => {
        return (
          <CustomDatePicker
            {...props}
            value={field.value}
            setFieldValue={form.setFieldValue}
            error={
              form.touched[field.name] ? Boolean(form.errors[field.name]) : null
            }
            helperText={
              form.touched[field.name] ? form.errors[field.name] : null
            }
            onChange={(value: any) => {
              form.setFieldValue(props.name, value)
              props.onChangeHandler?.(value)
            }}
            onBlur={field.onBlur}
          />
        )
      }}
    </Field>
  )
}
