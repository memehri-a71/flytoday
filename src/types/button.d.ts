export interface CustomButtonType {
    children: ReactNode
    type: "submit" | "button",
    variant: "contained" | "outlined" | "text",
    color?: "primary" | "secondary" | "info",
    isLoading?: boolean
    isFullWidth?: boolean
    disabled?: boolean
    width?:string
    onClick?: () => void
}