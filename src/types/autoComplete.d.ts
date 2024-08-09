interface Common {


  url?: string | undefined;
  optionLabel: string;
  placeholder?: string;
  disabled?: boolean;
  querySearch?: string
}

export interface CustomAutoCompleteProps extends Partial<Common> {
  value: any
  setFieldValue: any
  error: boolean | null;
  helperText: string;
  onChange: (value: any) => void;
  onBlur: () => void
}

export interface FormikAutoCompleteProps extends Partial<Common> {
  name: string;
}

