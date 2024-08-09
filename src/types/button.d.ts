export interface CustomButtonType {
    children: ReactNode
    type: "submit" | "button",
    variant: "contained" | "outlined" | "text",
    color?: "primary" |"secondary",
    isLoading?: boolean
    isFullWidth?: boolean
    disabled?: boolean
    onClick: () => void
}