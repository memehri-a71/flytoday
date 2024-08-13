import { ReactNode } from "react"

export interface Common{
  helperText?: string
  setFieldValue?: (name: any, value: any) => void
  onChange?: (value: string) => void
  onBlur?: () => void
  error:boolean
  value:any
  placeholder:string
}

export interface CustomSelectType extends Partial<Common>{
  handleChange?:(e:any)=>void | undefined
  options?:Record<string,any>
  children?:ReactNode
}

export interface FormikSelectType extends Partial<Common>{
 name:string
 onChangeHandler?:(value:any)=>void
 children?:ReactNode
}
