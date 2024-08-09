'use client'

import { useEffect } from 'react'
import { default as moment } from 'jalali-moment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { faIR } from '@mui/x-date-pickers/locales'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { HelperText } from '../helperText'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'moment/locale/de';

export const CustomDatePicker = (props) => {
  const {
    label,
    defaultValue = undefined,
    className,
    classnametitle,
    onClose,
    error = false,
    // value,
    helperText,
    title,
    name,
    onChange,
    setFieldValue,
    disabled = false,
  } = props
  const convertDate = (defaultValue: string): Date => {
    return new Date(
      moment.from(defaultValue, 'fa', 'jYYYY-jMM-jDD').format('YYYY-MM-DD'),
    )
  }
  useEffect(() => {
    if (defaultValue && setFieldValue) {
      setFieldValue(name, convertDate(defaultValue))
    }
  }, [defaultValue, name, setFieldValue])
  return (
    <div className={className}>

      <LocalizationProvider
        // localeText={
        //   faIR.components.MuiLocalizationProvider.defaultProps.localeText
        // }
        dateAdapter={AdapterMoment}
        adapterLocale="de"
        
      >
      
        <DatePicker
 
          // defaultValue={
          //   defaultValue === undefined ? convertDate : convertDate(defaultValue)
          // }
          className="w-full"
          disabled={disabled}
          slotProps={{
            textField: {
              size: 'small',
              error,
            },
          }}
          label={label}
          onClose={onClose}
          onChange={(e) => {
            onChange && onChange(e)
          }}
        />
        {error ? <HelperText>{helperText}</HelperText> : null}
      </LocalizationProvider>
    </div>
  )
}
