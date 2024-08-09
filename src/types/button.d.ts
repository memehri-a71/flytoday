export interface CustomButtonType {
    children: ReactNode
    type: "submit" | "button",
    variant: "contained" | "outlined" | "text",
    color?: "primary",
    isLoading?: boolean
    isFullWidth?: boolean
    disabled?: boolean
    onClick: () => void
}