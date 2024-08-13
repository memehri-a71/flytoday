'use client'

import { Field } from 'formik'
import type { FieldAttributes } from 'formik'
import { CustomSelect } from './customSelect'
import { FormikSelectType } from '@/types/select'

export const FormikSelect= (props:FormikSelectType) => {
  return (
    <Field name={props.name}>
      {({ form, field }: FieldAttributes<any>) => {
        return (
          <CustomSelect
          {...props}
          setFieldValue={form.setFieldValue}
          value={field.value}
          error={form.touched[field.name]
            ? Boolean(form.errors[field.name])
            : false}
          helperText={form.touched[field.name] ? form.errors[field.name] : null}
          onChange={(value) => {
            form.setFieldValue(props.name, value)
            props.onChangeHandler && props?.onChangeHandler?.(value)
          } }
          onBlur={field.onBlur}    
          >
            {props.children}
          </CustomSelect>
        )
      }}
    </Field>
  )
}
