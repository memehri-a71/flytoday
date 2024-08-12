export interface DatepickerPropsInterface {
  label: string
  name: string
  title: string
  defaultValue: string
  className: string
  helperText: string
  classnametitle: string
  hasError: boolean
  onClose?: any
  onChange?: (e) => void
  error: boolean
  disabled?: boolean
  setFieldValue?: (name: any, value: any) => void
}
